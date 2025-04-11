"use client";
/*
 * Documentation:
 * Big_Slider — https://app.subframe.com/c1b73978d0b6/library?component=Big_Slider_07d5bb58-586d-46da-99e4-947537a3d581
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface RangeProps
  extends React.ComponentProps<typeof SubframeCore.Slider.Range> {
  className?: string;
}

const Range = React.forwardRef<HTMLElement, RangeProps>(function Range(
  { className, ...otherProps }: RangeProps,
  ref
) {
  return (
    <SubframeCore.Slider.Range asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-full flex-col items-start rounded-sm bg-neutral-300",
          className
        )}
        ref={ref as any}
      />
    </SubframeCore.Slider.Range>
  );
});

interface ThumbProps
  extends React.ComponentProps<typeof SubframeCore.Slider.Thumb> {
  className?: string;
}

const Thumb = React.forwardRef<HTMLElement, ThumbProps>(function Thumb(
  { className, ...otherProps }: ThumbProps,
  ref
) {
  return (
    <SubframeCore.Slider.Thumb asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-16 w-5 items-center rounded-sm bg-neutral-300",
          className
        )}
        ref={ref as any}
      />
    </SubframeCore.Slider.Thumb>
  );
});

interface TrackProps
  extends React.ComponentProps<typeof SubframeCore.Slider.Track> {
  className?: string;
}

const Track = React.forwardRef<HTMLElement, TrackProps>(function Track(
  { className, ...otherProps }: TrackProps,
  ref
) {
  return (
    <SubframeCore.Slider.Track asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "flex h-1.5 w-full flex-col items-start gap-2 bg-neutral-100",
          className
        )}
        ref={ref as any}
      >
        <Big_Slider.Range />
      </div>
    </SubframeCore.Slider.Track>
  );
});

interface Big_SliderRootProps
  extends React.ComponentProps<typeof SubframeCore.Slider.Root> {
  label?: React.ReactNode;
  value?: number[];
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  className?: string;
}

const Big_SliderRoot = React.forwardRef<HTMLElement, Big_SliderRootProps>(
  function Big_SliderRoot(
    { label, className, ...otherProps }: Big_SliderRootProps,
    ref
  ) {
    return (
      <SubframeCore.Slider.Root asChild={true} {...otherProps}>
        <div
          className={SubframeUtils.twClassNames(
            "group/07d5bb58 flex h-16 w-full cursor-pointer flex-col items-start justify-center gap-2 overflow-hidden rounded-lg hover:border hover:border-solid hover:border-neutral-border hover:bg-transparent",
            className
          )}
          ref={ref as any}
        >
          {label ? (
            <span className="w-full text-monospace-body font-monospace-body text-default-font text-center absolute z-10">
              {label}
            </span>
          ) : null}
          <Track className="w-full grow shrink-0 basis-0" />
          <Thumb />
        </div>
      </SubframeCore.Slider.Root>
    );
  }
);

export const Big_Slider = Object.assign(Big_SliderRoot, {
  Range,
  Thumb,
  Track,
});
