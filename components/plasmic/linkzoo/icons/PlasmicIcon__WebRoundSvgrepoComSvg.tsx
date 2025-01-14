// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WebRoundSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WebRoundSvgrepoComSvgIcon(
  props: WebRoundSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-1 0 19 19"}
      className={classNames("plasmic-default__svg", className, "cf-icon-svg")}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.5 9.5a8 8 0 11-8-8 8 8 0 018 8zm-2.97.006a5.03 5.03 0 10-5.03 5.03 5.03 5.03 0 005.03-5.03zm-7.383-.4H4.289a4.237 4.237 0 012.565-3.498q.1-.042.2-.079a7.702 7.702 0 00-.907 3.577zm0 .8a7.7 7.7 0 00.908 3.577q-.102-.037-.201-.079a4.225 4.225 0 01-2.565-3.498zm.8-.8a9.04 9.04 0 01.163-1.402 6.164 6.164 0 01.445-1.415c.289-.615.66-1.013.945-1.013.285 0 .656.398.945 1.013a6.18 6.18 0 01.445 1.415 9.078 9.078 0 01.163 1.402zm3.106.8a9.073 9.073 0 01-.163 1.402 6.187 6.187 0 01-.445 1.415c-.289.616-.66 1.013-.945 1.013-.285 0-.656-.397-.945-1.013a6.172 6.172 0 01-.445-1.415 9.036 9.036 0 01-.163-1.402zm1.438-3.391a4.211 4.211 0 011.22 2.591h-1.858a7.698 7.698 0 00-.908-3.577q.102.037.201.08a4.208 4.208 0 011.345.906zm-.638 3.391h1.858a4.238 4.238 0 01-2.565 3.498q-.1.043-.2.08a7.697 7.697 0 00.907-3.578z"
        }
      ></path>
    </svg>
  );
}

export default WebRoundSvgrepoComSvgIcon;
/* prettier-ignore-end */
