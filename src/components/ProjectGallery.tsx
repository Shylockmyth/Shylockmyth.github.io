"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/projects";
import {
  ChevronLeft,
  ChevronRight,
  CloseIcon,
  ExpandIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "@/components/icons";

type Props = { items: GalleryItem[] };

export function ProjectGallery({ items }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressTapUntil = useRef(0);

  const openAt = useCallback((next: number) => {
    setZoomed(false);
    setIndex(next);
  }, []);

  const close = useCallback(() => {
    setIndex(null);
    setZoomed(false);
  }, []);

  const go = useCallback(
    (step: number) => {
      setZoomed(false);
      setIndex((current) => {
        if (current === null) return current;
        return (current + step + items.length) % items.length;
      });
    },
    [items.length],
  );

  // Open/close the modal dialog alongside React state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (index !== null && !dialog.open) {
      dialog.showModal();
      document.body.classList.add("is-lightbox-open");
    } else if (index === null && dialog.open) {
      dialog.close();
    }
  }, [index]);

  // Clean up scroll lock if the component unmounts while open.
  useEffect(() => {
    return () => document.body.classList.remove("is-lightbox-open");
  }, []);

  // Esc / backdrop clicks fire the dialog's close event.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      document.body.classList.remove("is-lightbox-open");
      setIndex(null);
      setZoomed(false);
    };

    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  // Keyboard navigation while the viewer is open.
  useEffect(() => {
    if (index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoomed(true);
      } else if (event.key === "-" || event.key === "0") {
        event.preventDefault();
        setZoomed(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, go]);

  const onBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close();
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (zoomed || index === null) return;
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || zoomed) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;

    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      // A swipe can still emit a click on some browsers: ignore that tap.
      suppressTapUntil.current = Date.now() + 500;
      go(dx < 0 ? 1 : -1);
    }
  };

  const current = index === null ? null : items[index];
  const counter = index === null ? "" : String(index + 1).padStart(2, "0");

  return (
    <>
      <div className="gallery">
        {items.map((item, i) => (
          <figure key={item.src} className={i === 0 ? "wide" : undefined}>
            <button
              type="button"
              className="gallery__item"
              onClick={() => openAt(i)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 720px) 100vw, 1000px"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <span className="sr-only">View figure full screen</span>
              <span className="gallery__zoom" aria-hidden="true">
                <ExpandIcon />
              </span>
            </button>
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Figure viewer"
        onClick={onBackdropClick}
      >
        {current && index !== null && (
          <div className="lightbox__panel">
            <div className="lightbox__bar">
              <p className="lightbox__count" aria-live="polite">
                <span>{counter}</span> / {String(items.length).padStart(2, "0")}
              </p>

              <div className="lightbox__tools">
                <button
                  type="button"
                  className="lightbox__btn lightbox__btn--text"
                  onClick={() => setZoomed((value) => !value)}
                  aria-pressed={zoomed}
                  aria-label={zoomed ? "Fit figure to screen" : "Zoom in on figure"}
                >
                  {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
                  <span>{zoomed ? "Fit" : "Zoom"}</span>
                </button>
                <button
                  type="button"
                  className="lightbox__btn"
                  onClick={close}
                  aria-label="Close figure viewer"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div
              className={`lightbox__stage${zoomed ? " is-zoomed" : ""}`}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              onClick={() => {
                if (Date.now() < suppressTapUntil.current) return;
                if (!zoomed) setZoomed(true);
              }}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="100vw"
                loading="eager"
                className="lightbox__img"
              />
            </div>

            <div className="lightbox__foot">
              <button
                type="button"
                className="lightbox__btn"
                onClick={() => go(-1)}
                aria-label="Previous figure"
                disabled={items.length < 2}
              >
                <ChevronLeft />
              </button>

              <p className="lightbox__caption">{current.caption || current.alt}</p>

              <button
                type="button"
                className="lightbox__btn"
                onClick={() => go(1)}
                aria-label="Next figure"
                disabled={items.length < 2}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
