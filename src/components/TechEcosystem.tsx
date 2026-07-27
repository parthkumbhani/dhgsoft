"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Section } from "@/components/ui/Section"
import {
  ArrowRight,
  Zap,
  Cpu,
  Layers,
  Database,
  Server,
  Cloud,
  LucideIcon
} from "lucide-react"

/* ═══════════════════════════════════════════════════════════════
   LOGO COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

interface LogoProps {
  className?: string
}

const SchneiderLogo = ({ className = "h-12 w-auto" }: LogoProps) => (
  <svg
     viewBox="0 0 188.74 57"
     className={className}
     xmlns="http://www.w3.org/2000/svg"
     xmlSpace="preserve">
    <g transform="matrix(1.25,0,0,-1.25,-511.80125,157.815)">
      <g transform="translate(1.4705494,-0.9803663)">
        <path d="M 426.252,119.898 C 422.873,121.398 420.858,121.98 418.857,121.98 C 416.757,121.98 415.412,121.228 415.412,120.066 C 415.412,116.559 427.309,117.546 427.309,109.434 C 427.309,104.961 423.556,102.362 418.342,102.362 C 414.252,102.362 412.238,103.42 409.918,104.618 L 409.918,109.636 C 413.264,107.419 415.312,106.636 417.893,106.636 C 420.131,106.636 421.338,107.419 421.338,108.784 C 421.338,112.603 409.441,111.204 409.441,119.557 C 409.441,123.585 412.922,126.252 418.342,126.252 C 420.958,126.252 423.318,125.703 426.252,124.441 L 426.252,119.898" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 442.909,103.428 C 440.926,102.709 439.249,102.366 437.576,102.366 C 432.035,102.366 428.453,105.593 428.453,110.503 C 428.453,115.323 432.174,118.728 437.37,118.728 C 438.975,118.728 441.027,118.317 442.668,114.016 C 441.369,114.706 439.865,115.084 438.634,115.084 C 435.66,115.084 433.747,113.297 433.747,110.539 C 433.747,107.742 435.628,105.901 438.462,105.901 C 439.658,105.901 440.721,106.175 442.909,106.994 L 442.909,103.428" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 486.109,112.311 C 486.312,114.501 487.584,115.767 489.532,115.767 C 491.447,115.767 492.745,114.465 492.95,112.311 L 486.109,112.311 z M 489.19,118.723 C 484.328,118.723 480.867,115.289 480.867,110.457 C 480.867,105.589 484.466,102.366 490.013,102.366 C 491.242,102.366 494.214,102.366 497.045,104.461 L 497.045,107.542 C 494.726,105.89 493.192,105.321 491.212,105.321 C 488.087,105.321 486.176,106.938 486.003,109.698 L 497.324,109.698 C 497.559,115.459 493.777,118.723 489.19,118.723" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 499.239,102.653 L 504.189,102.653 L 504.189,118.432 L 499.239,118.432 L 499.239,102.653 z" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 517.964,106.966 C 516.933,106.038 516.076,105.666 515.019,105.666 C 512.688,105.666 511.213,107.584 511.213,110.459 C 511.213,113.609 512.688,115.425 515.183,115.425 C 516.076,115.425 517.242,115.014 517.964,114.499 L 517.964,106.966 z M 517.964,125.961 L 517.964,117.74 C 516.627,118.387 515.294,118.728 513.853,118.728 C 509.338,118.728 506.214,115.391 506.214,110.562 C 506.214,105.837 509.338,102.362 513.574,102.362 C 515.254,102.362 516.552,102.802 517.964,103.928 L 517.964,102.658 L 522.913,102.658 L 522.913,125.961 L 517.964,125.961" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 530.24,112.311 C 530.446,114.501 531.711,115.767 533.656,115.767 C 535.574,115.767 536.885,114.465 537.09,112.311 L 530.24,112.311 z M 533.318,118.723 C 528.457,118.723 525.002,110.457 525.002,110.457 C 525.002,105.589 528.601,102.366 534.142,102.366 C 535.369,102.366 538.347,102.366 541.185,104.461 L 541.185,107.542 C 538.863,105.89 537.326,105.321 535.337,105.321 C 532.229,105.321 530.31,106.938 530.137,109.698 L 541.453,109.698 C 541.688,115.459 537.903,118.723 533.318,118.723" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 548.863,113.914 L 548.936,113.914 C 550.405,117.198 552.05,118.738 553.959,118.738 C 554.948,118.738 555.801,118.361 557.237,117.299 L 555.875,112.924 C 554.575,113.744 553.721,114.087 552.936,114.087 C 551.12,114.087 549.958,112.375 548.863,109.481 L 548.863,102.674 L 543.907,102.674 L 543.907,118.449 L 548.863,118.449 L 548.863,113.914" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 504.421,125.07 C 504.886,123.844 504.049,122.134 502.558,121.254 C 501.061,120.375 499.479,120.654 499.018,121.88 C 498.548,123.108 499.381,124.82 500.876,125.695 C 502.369,126.579 503.952,126.299 504.421,125.07" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 460.738,112.696 C 460.738,116.972 457.832,118.723 454.964,118.723 C 453.014,118.723 451.411,117.9 449.977,116.085 L 449.909,116.085 L 449.909,125.961 L 444.954,125.961 L 444.954,102.699 L 449.909,102.699 L 449.909,112.696 C 451.068,114.373 452.058,115.09 453.219,115.09 C 454.76,115.09 455.784,113.994 455.784,111.637 L 455.784,106.094 C 457.446,106.948 459.135,107.472 460.738,107.667 L 460.738,112.696" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 473.166,118.728 C 471.148,118.728 469.607,117.978 468.03,116.174 L 468.03,118.432 L 463.077,118.432 L 463.077,107.709 C 464.793,107.538 466.982,106.751 468.03,105.451 L 468.03,112.82 C 469.332,114.774 470.256,115.425 471.488,115.425 C 472.891,115.425 473.957,114.499 473.957,112.274 L 473.957,102.694 L 478.911,102.694 L 478.911,112.684 C 478.911,117.331 475.629,118.728 473.166,118.728" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 481.647,98.163 L 475.891,98.163 L 475.891,94.073 L 481.444,94.073 L 481.444,92.318 L 475.891,92.318 L 475.891,88.099 L 481.819,88.099 L 481.819,86.346 L 473.961,86.346 L 473.961,99.914 L 481.647,99.914 L 481.647,98.163" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 486.348,86.338 L 488.111,86.338 L 488.111,99.918 L 486.348,99.918 L 486.348,86.338 z" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 496.84,93.944 C 498.09,93.944 498.865,93.083 498.923,91.73 L 494.433,91.73 C 494.676,93.143 495.489,93.944 496.84,93.944 z M 494.401,90.553 L 500.682,90.553 C 500.682,93.864 499.169,95.462 496.8,95.462 C 494.342,95.462 492.635,93.645 492.635,90.935 C 492.635,88.458 494.177,86.171 496.953,86.171 C 498.466,86.171 499.444,86.507 500.527,87.226 L 500.527,88.942 C 499.481,88.257 498.466,87.862 497.398,87.862 C 495.69,87.862 494.676,88.778 494.401,90.553" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 512.195,92.942 C 511.181,93.636 510.504,93.84 509.732,93.84 C 508.118,93.84 507,92.602 507,90.789 C 507,88.942 508.19,87.829 510.027,87.829 C 510.783,87.829 511.503,88.025 512.392,88.423 L 512.392,86.684 C 511.798,86.404 510.666,86.171 509.732,86.171 C 507.062,86.171 505.209,88.007 505.209,90.631 C 505.209,93.592 506.902,95.462 509.611,95.462 C 510.646,95.462 511.342,95.221 512.195,94.846 L 512.195,92.942" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 520.228,95.291 L 523.058,95.291 L 523.058,93.702 L 520.228,93.702 L 520.228,89.11 C 520.228,88.059 520.989,87.755 521.503,87.755 C 522.141,87.755 522.799,87.978 523.513,88.419 L 523.513,86.765 C 522.894,86.424 521.944,86.171 521.362,86.171 C 519.442,86.171 518.471,87.363 518.471,88.977 L 518.471,93.702 L 516.916,93.702 L 516.916,93.899 L 520.228,97.14 L 520.228,95.291" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 529.8,95.291 L 529.8,93.22 L 529.836,93.22 C 530.735,94.805 531.59,95.462 532.422,95.462 C 533.14,95.462 533.812,95.125 534.551,94.426 L 533.617,92.872 C 533.08,93.403 532.386,93.769 531.967,93.769 C 530.753,93.769 529.8,91.006 529.8,91.006 L 529.8,86.338 L 528.039,86.338 L 528.039,95.291 L 529.8,95.291" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 552.618,92.942 C 551.599,93.636 550.923,93.84 550.146,93.84 C 548.536,93.84 547.427,92.602 547.427,90.789 C 547.427,88.942 548.618,87.829 550.444,87.829 C 551.201,87.829 551.917,88.025 552.818,88.423 L 552.818,86.684 C 552.211,86.404 551.078,86.171 550.146,86.171 C 547.48,86.171 545.619,90.631 545.619,90.631 C 545.619,90.631 547.32,95.462 550.029,95.462 C 551.066,95.221 551.755,95.221 552.618,94.846 L 552.618,92.942" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 539.225,86.338 L 540.988,86.338 L 540.988,95.291 L 539.225,95.291 L 539.225,86.338 z" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 541.047,98.507 C 541.219,98.075 540.918,97.464 540.388,97.153 C 539.854,96.841 539.289,96.941 539.128,97.374 C 538.967,97.811 539.259,98.417 539.795,98.729 C 540.324,99.045 540.886,98.944 541.047,98.507" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
        <path d="M 462.13,97.783 C 461.819,97.783 461.688,97.732 461.561,97.59 C 461.511,97.535 461.491,97.479 461.473,97.367 L 459.892,91.371 C 459.521,89.268 456.938,87.168 453.571,87.168 L 448.89,87.168 L 449.702,90.249 L 452.709,90.249 C 453.016,90.249 453.256,90.363 453.457,90.587 C 453.531,90.684 453.627,90.81 453.64,90.95 L 454.888,96.189 C 455.256,98.293 457.479,100.617 460.845,100.617 L 465.639,100.617 L 465.026,97.783 L 462.13,97.783 z M 463.21,94.129 L 463.745,96.069 L 468.615,96.069 C 469.216,98.882 468.743,101.488 467.036,103.195 C 463.581,106.65 456.353,105.476 450.968,100.324 C 450.127,99.524 449.417,98.659 448.77,97.775 L 451.702,97.775 L 451.02,95.831 L 447.517,95.831 C 447.182,95.831 447.182,95.831 447.182,95.831 L 447.517,95.831" fill="#009639" fillOpacity={1} fillRule="nonzero" stroke="none" />
      </g>
    </g>
  </svg>
)

const AvevaLogo = ({ className = "h-12 w-auto opacity-100" }: LogoProps) => (
  <svg viewBox="14 21 165 39" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="#3D1152">
      <path d="M86.6,53.4h22.5c0.2,0,0.4,0.2,0.4,0.4V58c0,0.2-0.2,0.4-0.4,0.4H86.6c-0.2,0-0.4-0.2-0.4-0.4v-4.2 C86.2,53.6,86.4,53.4,86.6,53.4z"/>
      <path d="M86.6,38.3h22.5c0.2,0,0.4,0.2,0.4,0.4v4.2c0,0.2-0.2,0.4-0.4,0.4H86.6c-0.2,0-0.4-0.2-0.4-0.4v-4.2 C86.2,38.5,86.4,38.3,86.6,38.3z"/>
      <path d="M86.6,23.3h22.5c0.2,0,0.4,0.2,0.4,0.4v4.2c0,0.2-0.2,0.4-0.4,0.4H86.6c-0.2,0-0.4-0.2-0.4-0.4v-4.2 C86.2,23.5,86.4,23.3,86.6,23.3z"/>
      <path d="M55.8,23.5l9.6,21.9c0.1,0.2,0.3,0.3,0.5,0.2c0.1,0,0.2-0.1,0.2-0.2l9.4-21.9c0.1-0.1,0.2-0.2,0.4-0.2h4.6 c0.2,0,0.4,0.2,0.4,0.4c0,0.1,0,0.1,0,0.2L66.1,58.1c-0.1,0.2-0.3,0.3-0.5,0.2c-0.1,0-0.2-0.1-0.2-0.2L50.5,23.9 c-0.1-0.2,0-0.4,0.2-0.5c0,0,0.1,0,0.2,0h4.6C55.6,23.3,55.7,23.4,55.8,23.5z"/>
      <path d="M53.7,57.8L38.8,23.5c-0.1-0.2-0.3-0.3-0.5-0.2c-0.1,0-0.2,0.1-0.2,0.2l-9.6,22.3h-9.9c-0.2,0-0.3,0.2-0.3,0.4 c0,0,0,0.1,0,0.1l1.9,4.3c0,0.1,0.2,0.2,0.3,0.2h6l-3,7c-0.1,0.2,0,0.4,0.2,0.5c0,0,0.1,0,0.2,0h4.6c0.2,0,0.3-0.1,0.4-0.2l3.1-7.3 h13.4l3.2,7.3c0.1,0.1,0.2,0.2,0.4,0.2h4.6c0.2,0,0.4-0.2,0.4-0.4C53.7,57.9,53.7,57.9,53.7,57.8z M33.9,45.9l4.2-9.6c0.1-0.2,0.3-0.3,0.5-0.2c0.1,0,0.2,0.1,0.2,0.2l4.2,9.6H33.9z"/>
      <path d="M119.8,23.5l9.6,21.9c0.1,0.2,0.3,0.3,0.5,0.2c0.1,0,0.2-0.1,0.2-0.2l9.4-21.9c0.1-0.1,0.2-0.2,0.4-0.2h4.6 c0.2,0,0.4,0.2,0.4,0.4c0,0.1,0,0.1,0,0.2L129.8,58.1c-0.1,0.2-0.3,0.3-0.5,0.2c-0.1,0-0.2-0.1-0.2-0.2L114.2,23.9 c-0.1-0.2,0-0.4,0.2-0.5c0,0,0.1,0,0.2,0h4.6C119.6,23.3,119.7,23.4,119.8,23.5z"/>
      <path d="M172.1,57.8l-14.9-34.3c-0.1-0.2-0.3-0.3-0.5-0.2c-0.1,0-0.2,0.1-0.2,0.2l-14.8,34.3c-0.1,0.2,0,0.4,0.2,0.5 c0.1,0,0.1,0,0.2,0h4.6c0.2,0,0.3-0.1,0.4-0.2l3.1-7.3h13.4l3.2,7.3c0.1,0.1,0.2,0.2,0.4,0.2h4.6c0.2,0,0.4-0.2,0.4-0.4 C172.2,57.9,172.1,57.8,172.1,57.8z M152.4,45.9l4.2-9.6c0.1-0.2,0.3-0.3,0.5-0.2c0.1,0,0.2,0.1,0.2,0.2l4.2,9.6H152.4z"/>
    </g>
  </svg>
)

const DatabricksLogo = ({ className = "h-12 w-auto opacity-100" }: LogoProps) => (
  <svg
     viewBox="0 0 160 50"
     fill="none"
     className={className}
     xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(8, 11) scale(1.15)" fill="#FF3621">
      <path d="M.95 14.184L12 20.403l9.919-5.55v2.21L12 22.662l-10.484-5.96-.565.308v.77L12 24l11.05-6.218v-4.317l-.515-.309L12 19.118l-9.867-5.653v-2.21L12 16.805l11.05-6.218V6.32l-.515-.308L12 11.758l-9.867-5.653v-2.21L12 9.444l11.05-6.218V.908L22.535.6l-10.535 5.92L1.516.561.95.87v.77L12 7.858l9.919-5.55v2.21L12 10.117.95 3.9v5.967l.566.309L12 14.498l9.919-5.55v2.21L12 16.758.95 10.54v3.644z" />
    </g>
    <g transform="matrix(0.225, 0, 0, 0.225, 13.3, 24.1)">
      <g transform="translate(0,-36)">
        <path d="m 140.9,39.8 h 0.4 c 0,0 -0.4,-3.5 -0.4,-4 V 7.3 h -8.5 V 0 h 17.4 v 80.9 h 8.2 v 7.3 h -14.9 l -1.3,-8.3 h -0.5 c 0,0 -5.4,9.1 -18.8,9.1 -14.6,0 -25.6,-9.8 -25.6,-28.5 0,-18.2 11.8,-28.4 25.7,-28.4 14.1,0.1 18.3,7.7 18.3,7.7 z m 0,32.6 V 47.6 c -1.5,-2.4 -6.3,-7.9 -16.6,-7.9 -8.9,0 -18.6,6.5 -18.6,20.9 0,14.3 8.8,21.1 18.7,21.1 6.7,-0.1 13.4,-3.2 16.5,-9.3 z" fill="#0B2026" />
        <path d="m 203.2,79 c 0,0 -4.9,10.1 -21.1,10.1 -11.4,0 -19.1,-6.7 -19.1,-16 0,-10.3 9.7,-15.6 25.2,-15.6 h 14 v -4.6 c 0,-9.5 -5.4,-13.5 -15.5,-13.5 -9.6,0 -14.4,4.6 -14.4,10.8 v 1.2 h -8.2 v -2.7 c 0,-8 7.1,-16.4 22.8,-16.4 14.9,0 24.1,6.6 24.1,21.1 v 27.7 h 6.6 v 7.3 h -13.3 l -1.1,-9.2 v 0 z m -1,-15.1 h -13.4 c -9.7,0 -17,2.8 -17,9.2 0,5.4 5.1,9 12.2,9 12.8,0 18.2,-9.6 18.2,-9.6 z" fill="#0B2026" />
        <path d="M 236.2,18.2 V 33 h 17.5 v 7.1 h -17.5 v 29.8 c 0,7.8 3.4,11.6 9.2,11.6 6.2,0 9.9,-1.8 9.9,-1.8 v 7.5 c 0,0 -4.5,1.9 -11.4,1.9 -10.6,0 -16.7,-6.2 -16.7,-18.7 V 40.1 h -8.4 V 33 h 8.4 l 1.5,-14.8 z" fill="#0B2026" />
        <path d="m 300.5,79 c 0,0 -4.9,10.1 -21.1,10.1 -11.4,0 -19.1,-6.7 -19.1,-16 0,-10.3 9.7,-15.6 25.2,-15.6 h 14 v -4.6 c 0,-9.5 -5.4,-13.5 -15.5,-13.5 -9.6,0 -14.4,4.6 -14.4,10.8 v 1.2 h -8.2 v -2.7 c 0,-8 7.1,-16.4 22.8,-16.4 14.9,0 24.1,6.6 24.1,21.1 v 27.7 h 6.6 v 7.3 h -13.3 l -1.1,-9.2 v 0 z m -0.9,-15.1 h -13.4 c -9.7,0 -17,2.8 -17,9.2 0,5.4 5.1,9 12.2,9 12.8,0 18.2,-9.6 18.2,-9.6 z" fill="#0B2026" />
        <path d="m 331.4,80 -1.4,8.3 h -6.7 v -81 h -8.2 V 0 h 17 v 35.7 c 0,0.5 -0.4,4 -0.4,4 h 0.4 c 0,0 5,-7.6 18.5,-7.6 13.7,0 25.6,10.2 25.6,28.4 0,18.7 -11,28.5 -25.4,28.5 -13.4,0 -18.9,-9.1 -18.9,-9.1 h -0.5 z m 0.7,-32.4 v 24.8 c 3,6 9.8,9.2 16.6,9.2 9.8,0 18.6,-6.7 18.6,-21.1 0,-14.4 -9.6,-20.9 -18.5,-20.9 -10.2,0 -15,5.5 -16.7,8 z" fill="#0B2026" />
        <path d="m 419.4,41.2 c -1.3,-0.5 -3.4,-0.8 -6.3,-0.8 -13.7,0 -16.6,16.3 -16.6,16.3 V 81 h 9 v 7.3 h -26 V 81 h 8.2 V 40.4 h -8.2 V 33 h 14.9 l 0.8,14.1 h 0.4 c 0,0 2.7,-14.9 17.8,-14.9 2.5,0 4.6,0.4 6,0.6 z" fill="#0B2026" />
        <path d="m 444.5,80.9 h 7.9 v 7.3 h -25 v -7.3 h 8.2 V 40.4 h -8.2 V 33 h 17 V 80.9 Z M 439.6,23 c -3.8,0 -6.9,-3.1 -6.9,-7.1 0,-3.8 3.1,-6.9 6.9,-6.9 3.9,0 7.1,3.1 7.1,6.9 0,4 -3.2,7.1 -7.1,7.1 z" fill="#0B2026" />
        <path d="m 463.9,60.6 c 0,14.4 9.3,21.1 19.9,21.1 12.9,0 18.1,-6 18.1,-6 L 505,82 c 0,0 -6.2,7.1 -21.8,7.1 -16.4,0 -28,-10.2 -28,-28.5 0,-19.2 10.5,-28.4 27.5,-28.4 17.3,0 23.5,9.5 23.5,19.8 v 3 H 498 v -1.8 c 0,-8.3 -4.7,-13.5 -15.5,-13.5 -11.1,-0.1 -18.6,5.5 -18.6,20.9 z" fill="#0B2026" />
        <path d="m 526.7,56.1 h 13.7 l 13.3,-16 h -6.9 V 33 h 25 v 7.1 h -8.5 l -16.1,19.5 16.9,21.5 h 8.4 v 7.1 H 559.1 L 539.7,63 h -13 v 17.9 h 7.9 v 7.3 h -25.1 v -7.3 h 8.3 V 7.3 h -8.3 V 0 h 17.2 z" fill="#0B2026" />
        <path d="m 584.7,70.3 v 1.3 c 0,5.7 4.7,10.2 14.8,10.2 10.2,0 14.7,-3.3 14.7,-8.8 0,-5.7 -7.3,-7.6 -15.3,-9 -9.9,-1.8 -21.1,-4.4 -21.1,-16.3 0,-9.5 9,-15.5 21.3,-15.5 16.3,0 22.4,6.7 22.4,15.1 v 4 h -8.3 v -2.6 c 0,-5.9 -3.9,-9.3 -13.7,-9.3 -6.4,0 -12.9,2.6 -12.9,8.4 0,6.5 7.8,7.7 15.9,9.2 10.4,2 20.5,5.2 20.5,16.1 0,8.9 -6.6,16 -23.2,16 -17,0 -23.3,-7.6 -23.3,-15.4 v -3.4 z" fill="#0B2026" />
      </g>
    </g>
  </svg>
)

const AwsLogo = ({ className = "h-12 w-auto opacity-100" }: LogoProps) => (
  <svg
     viewBox="-38 -45 380 272"
     className={className}
     xmlns="http://www.w3.org/2000/svg"
     xmlSpace="preserve">
    <g>
      <path
         fill="#252f3e"
         d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2 c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8 c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8 c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4 c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1 c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6 c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7 c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6 C37.7,80.4,41.2,81.6,45.8,81.6z M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4 c0-1.6,0.8-2.5,2.4-2.5h9.8c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1 h8c1.9,0,3.2,0.3,4,1c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5 c0,0.5-0.1,1-0.2,1.6c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1 c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8 c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3 c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5 c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1 c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1 c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2 c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1 c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6 c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z" />
      <g>
        <path
           fill="#FF9900"
           fillRule="evenodd"
           clipRule="evenodd"
           d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4 c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z" />
        <path
           fill="#FF9900"
           fillRule="evenodd"
           clipRule="evenodd"
           d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5 c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z" />
      </g>
    </g>
  </svg>
)

const AzureLogo = ({ className = "h-12 w-auto opacity-100" }: LogoProps) => (
  <svg
     viewBox="48 6 200 84"
     className={className}
     xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="az-grad-1" x1="-1032.172" x2="-1059.213" y1="145.312" y2="65.426"
        gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#114a8b"/>
        <stop offset="1" stopColor="#0669bc"/>
      </linearGradient>
      <linearGradient id="az-grad-shadow" x1="-1023.725" x2="-1029.98" y1="108.083" y2="105.968"
        gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopOpacity=".3"/>
        <stop offset=".071" stopOpacity=".2"/>
        <stop offset=".321" stopOpacity=".1"/>
        <stop offset=".623" stopOpacity=".05"/>
        <stop offset="1" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="az-grad-2" x1="-1027.165" x2="-997.482" y1="147.642" y2="68.561"
        gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3ccbf4"/>
        <stop offset="1" stopColor="#2892df"/>
      </linearGradient>
    </defs>
    <g transform="translate(52, 10) scale(0.72)">
      <path fill="url(#az-grad-1)" d="M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z"/>
      <path fill="#0078d4" d="M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.38z"/>
      <path fill="url(#az-grad-shadow)" d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z"/>
      <path fill="url(#az-grad-2)" d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z"/>
    </g>
    <text x="133" y="36"
      fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
      fontSize="12.5"
      fontWeight="600"
      letterSpacing="0.02em"
      fill="#5E5E5E">Microsoft</text>
    <text x="133" y="64"
      fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
      fontSize="25"
      fontWeight="600"
      letterSpacing="-0.01em"
      fill="#0078d4">Azure</text>
  </svg>
)

const PhoenixContactLogo = ({ className = "h-12 w-auto" }: LogoProps) => (
  <svg
     viewBox="0 0 200 45"
     className={className}
     xmlns="http://www.w3.org/2000/svg">
    <g fill="#005A50">
      <rect x="2" y="8" width="10" height="28" rx="2" fill="#005A50" />
      <rect x="15" y="8" width="10" height="17" rx="2" fill="#005A50" />
      <rect x="15" y="28" width="10" height="8" rx="1.5" fill="#FF7A00" />
      <text x="32" y="26" fontFamily="sans-serif" fontSize="18" fontWeight="900" letterSpacing="0.04em">PHOENIX</text>
      <text x="32" y="36" fontFamily="sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.32em">CONTACT</text>
    </g>
  </svg>
)

import { getPartners, EcosystemPartner } from "@/lib/data-store"

function getDomainIcon(category: string): LucideIcon {
  switch (category) {
    case "Automation": return Cpu;
    case "Cloud": return Cloud;
    case "Hardware": return Zap;
    default: return Server;
  }
}

function getLogoComponent(id: string): React.ComponentType<{ className?: string }> {
  switch (id) {
    case "schneider-electric": return SchneiderLogo;
    case "aveva": return AvevaLogo;
    case "aws": return AwsLogo;
    case "databricks": return DatabricksLogo;
    case "azure": return AzureLogo;
    case "phoenix-contact": return PhoenixContactLogo;
    default: return () => null;
  }
}

interface PartnerItem {
  name: string
  logo: React.ComponentType<{ className?: string }>
  logoSrc: string
  domainIcon: LucideIcon
  capabilityTitle: string
  desc: string
  websiteUrl?: string
}

interface TechEcosystemProps {
  onContactClick?: () => void
}

export default function TechEcosystem({ onContactClick }: TechEcosystemProps) {
  // Initialize with real data immediately so N is stable from first render
  // This prevents the React hooks order violation caused by N changing 1→6
  const [partners, setPartners] = useState<EcosystemPartner[]>(() => {
    if (typeof window !== 'undefined') return getPartners()
    return []
  })

  useEffect(() => {
    // Sync on mount in case localStorage has updated data
    setPartners(getPartners())

    const handleUpdate = () => {
      setPartners(getPartners())
    }
    window.addEventListener("dhg_partners_updated", handleUpdate)
    return () => window.removeEventListener("dhg_partners_updated", handleUpdate)
  }, [])

  const PARTNERS_DATA: PartnerItem[] = partners.map((p) => ({
    name: p.name,
    logo: getLogoComponent(p.id),
    logoSrc: p.logoUrl || "",
    domainIcon: getDomainIcon(p.category),
    capabilityTitle: p.capabilityTitle || p.name,
    desc: p.description,
    websiteUrl: p.websiteUrl || ""
  }))

  const N = PARTNERS_DATA.length || 1

  const [activeIdx, setActiveIdx] = useState(2) // AWS is active by default
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [windowWidth, setWindowWidth] = useState(1200)

  // Motion Values for continuous horizontal Coverflow slider index
  const activeIndex = useMotionValue(2) // Start at AWS index
  const wrappedIndex = useTransform(activeIndex, (v) => ((v % N) + N) % N)
  const backgroundX = useMotionValue(0)
  const backgroundY = useMotionValue(0)

  const activeIdxRef = useRef(2)
  const autoplayControlsRef = useRef<any>(null)
  const timeoutRef = useRef<any>(null)
  const isTransitioningRef = useRef(false)
  const isHoveredRef = useRef(false)

  // Track window resizing to dynamically scale card spacing
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      const handleResize = () => setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Auto-rotate over dynamic duration (3 seconds per card)
  const startAutoplay = (startFrom = activeIndex.get()) => {
    autoplayControlsRef.current?.stop()
    activeIndex.set(startFrom)

    autoplayControlsRef.current = animate(activeIndex, startFrom + N, {
      ease: "linear",
      duration: Math.max(6, 3 * N),
      repeat: Infinity,
      onUpdate: (latest) => {
        const closestIdx = ((Math.round(latest) % N) + N) % N
        if (closestIdx !== activeIdxRef.current) {
          activeIdxRef.current = closestIdx
          setActiveIdx(closestIdx)
        }
      }
    })
  }

  useEffect(() => {
    startAutoplay(2) // Start autoplay
    return () => {
      autoplayControlsRef.current?.stop()
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [partners.length]) // restart autoplay if partner length changes

  const getSpacing = () => {
    if (windowWidth < 640) return 295   // mobile
    if (windowWidth < 1024) return 320 // tablet
    return 345                        // desktop
  }

  const spacing = getSpacing()

  // Hover handlers
  const handleMouseEnterCarousel = () => {
    isHoveredRef.current = true
    if (!isTransitioningRef.current) {
      autoplayControlsRef.current?.stop()
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }

  const handleMouseLeaveCarousel = () => {
    isHoveredRef.current = false
    if (!isTransitioningRef.current) {
      startAutoplay(activeIndex.get())
    }
  }

  const handleCardClick = (clickedIdx: number) => {
    autoplayControlsRef.current?.stop()
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    isTransitioningRef.current = true
    const currentVal = activeIndex.get()
    const targetBase = clickedIdx
    const m = Math.round((currentVal - targetBase) / N)
    const target = targetBase + m * N

    autoplayControlsRef.current = animate(activeIndex, target, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const closestIdx = ((Math.round(latest) % N) + N) % N
        if (closestIdx !== activeIdxRef.current) {
          activeIdxRef.current = closestIdx
          setActiveIdx(closestIdx)
        }
      },
      onComplete: () => {
        isTransitioningRef.current = false
        if (!isHoveredRef.current) {
          timeoutRef.current = setTimeout(() => {
            startAutoplay(activeIndex.get())
          }, 5000)
        }
      }
    })
  }

  const handleNavigate = (direction: 'left' | 'right') => {
    autoplayControlsRef.current?.stop()
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    isTransitioningRef.current = true
    const currentVal = activeIndex.get()
    const target = direction === 'left' ? Math.round(currentVal) - 1 : Math.round(currentVal) + 1

    autoplayControlsRef.current = animate(activeIndex, target, {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const closestIdx = ((Math.round(latest) % N) + N) % N
        if (closestIdx !== activeIdxRef.current) {
          activeIdxRef.current = closestIdx
          setActiveIdx(closestIdx)
        }
      },
      onComplete: () => {
        isTransitioningRef.current = false
        if (!isHoveredRef.current) {
          timeoutRef.current = setTimeout(() => {
            startAutoplay(activeIndex.get())
          }, 5000)
        }
      }
    })
  }

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - box.left) / box.width - 0.5
    const y = (e.clientY - box.top) / box.height - 0.5
    backgroundX.set(x * 8)
    backgroundY.set(y * 8)
  }

  const handleContactNavigation = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      const contactEl = document.getElementById("contact")
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Scroll reveal variants
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.03,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  }

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 0.04,
      pathLength: 1,
      transition: { duration: 1.0, ease: "easeInOut" as const, delay: 0.2 }
    }
  }

  const cardsContainerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.6 }
    }
  }

  return (
    <Section
      id="ecosystem"
      variant="white"
      containerSize="wide"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={sectionVariants}
      onMouseMove={handleSectionMouseMove}
      className="overflow-hidden border-y border-[#ECECEC]"
    >
      {/* ── BACKGROUND LAYER 1: Engineering Blueprint Grid & CAD Symbols (<3% opacity, parallax) ── */}
      <motion.div
        variants={gridVariants}
        style={{
          x: useTransform(backgroundX, (v) => (v as number) * 0.4),
          y: useTransform(backgroundY, (v) => (v as number) * 0.4),
        }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="eng-blueprint-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#CBD5E1" strokeWidth="0.8" opacity="0.15" />
              <path d="M 20 0 L 20 100 M 40 0 L 40 100 M 60 0 L 60 100 M 80 0 L 80 100 M 0 20 L 100 20 M 0 40 L 100 40 M 0 60 L 100 60 M 0 80 L 100 80" fill="none" stroke="#CBD5E1" strokeWidth="0.3" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eng-blueprint-grid)" />
        </svg>
      </motion.div>

      {/* ── BACKGROUND LAYER 2: Thin CAD circles, Crosshairs, ticks & coordinate marks (<4% opacity, parallax) ── */}
      <motion.div
        variants={gridVariants}
        style={{
          x: useTransform(backgroundX, (v) => (v as number) * 0.6),
          y: useTransform(backgroundY, (v) => (v as number) * 0.6),
        }}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible"
      >
        <svg className="w-[1200px] h-[600px] overflow-visible opacity-[0.035]" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            style={{ originX: "600px", originY: "300px" }}
          >
            <circle cx="600" cy="300" r="480" fill="none" stroke="#64748B" strokeWidth="0.5" strokeDasharray="1,6" />
            <circle cx="600" cy="300" r="320" fill="none" stroke="#94A3B8" strokeWidth="0.6" strokeDasharray="3,12" />
            <g transform="translate(600, 300) rotate(30)"><line x1="0" y1="-320" x2="0" y2="-310" stroke="#94A3B8" strokeWidth="0.5" /></g>
            <g transform="translate(600, 300) rotate(60)"><line x1="0" y1="-320" x2="0" y2="-310" stroke="#94A3B8" strokeWidth="0.5" /></g>
            <g transform="translate(600, 300) rotate(120)"><line x1="0" y1="-320" x2="0" y2="-310" stroke="#94A3B8" strokeWidth="0.5" /></g>
            <g transform="translate(600, 300) rotate(150)"><line x1="0" y1="-320" x2="0" y2="-310" stroke="#94A3B8" strokeWidth="0.5" /></g>
          </motion.g>

          <circle cx="600" cy="300" r="160" fill="none" stroke="#CBD5E1" strokeWidth="0.4" />
          <line x1="600" y1="20" x2="600" y2="580" stroke="#94A3B8" strokeWidth="0.4" strokeDasharray="4,8" />
          <line x1="20" y1="300" x2="1180" y2="300" stroke="#94A3B8" strokeWidth="0.4" strokeDasharray="4,8" />
          
          <g stroke="#64748B" strokeWidth="0.5">
            <path d="M 150 100 L 170 100 M 160 90 L 160 110" />
            <path d="M 1030 100 L 1050 100 M 1040 90 L 1040 110" />
            <path d="M 150 500 L 170 500 M 160 490 L 160 510" />
            <path d="M 1030 500 L 1050 500 M 1040 490 L 1040 510" />
          </g>

          <g fill="#94A3B8" fontSize="8" fontFamily="monospace" opacity="0.8">
            <text x="180" y="103">REF_PT: 0,0,0</text>
            <text x="1000" y="503">SCALE: 1:1</text>
            <text x="610" y="45">Z_AXIS: 1200px</text>
            <text x="1100" y="295">X_AXIS</text>
            <text x="560" y="570">Y_AXIS</text>
          </g>
          
          <g transform="translate(600, 300)">
            <circle cx="0" cy="0" r="10" fill="none" stroke="#64748B" strokeWidth="0.4" strokeDasharray="2,2" />
            <path d="M -15 0 L 15 0 M 0 -15 L 0 15" stroke="#64748B" strokeWidth="0.4" />
            <path d="M -500,-200 L -530,-200 L -530,-170" fill="none" stroke="#64748B" strokeWidth="0.6" />
            <path d="M 500,-200 L 530,-200 L 530,-170" fill="none" stroke="#64748B" strokeWidth="0.6" />
            <path d="M -500,200 L -530,200 L -530,170" fill="none" stroke="#64748B" strokeWidth="0.6" />
            <path d="M 500,200 L 530,200 L 530,170" fill="none" stroke="#64748B" strokeWidth="0.6" />
          </g>
        </svg>
      </motion.div>

      {/* ── BACKGROUND LAYER 3: Technical orbital curves (<4% opacity) ── */}
      <motion.div
        variants={gridVariants}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible opacity-[0.03]"
      >
        <motion.svg
          animate={{ scale: [0.98, 1.02, 0.98] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="w-[1200px] h-[600px] overflow-visible"
          viewBox="0 0 1200 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="600" cy="300" rx="550" ry="180" fill="none" stroke="#C2185B" strokeWidth="0.8" strokeDasharray="4,8" />
          <ellipse cx="600" cy="300" rx="450" ry="145" fill="none" stroke="#8C123B" strokeWidth="0.6" strokeDasharray="2,6" />
        </motion.svg>
      </motion.div>

      {/* ── BACKGROUND LAYER 4: Industrial network nodes (<3% opacity) ── */}
      <motion.div
        variants={gridVariants}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible opacity-[0.025]"
      >
        <svg className="w-[1200px] h-[600px] overflow-visible" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#94A3B8" strokeWidth="0.4">
            <line x1="250" y1="180" x2="320" y2="220" />
            <line x1="320" y1="220" x2="280" y2="340" />
            <line x1="880" y1="220" x2="950" y2="180" />
            <line x1="880" y1="220" x2="920" y2="340" />
            <line x1="450" y1="140" x2="520" y2="100" />
            <line x1="750" y1="140" x2="680" y2="100" />
          </g>
          <motion.circle cx="250" cy="180" r="3" fill="#C5165C" animate={{ r: [3, 5, 3] }} transition={{ repeat: Infinity, duration: 4, delay: 0 }} />
          <motion.circle cx="320" cy="220" r="2.5" fill="#FF8A00" animate={{ r: [2.5, 4, 2.5] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} />
          <circle cx="280" cy="340" r="3" fill="#94A3B8" />
          <motion.circle cx="880" cy="220" r="2.5" fill="#FF8A00" animate={{ r: [2.5, 4, 2.5] }} transition={{ repeat: Infinity, duration: 4, delay: 2 }} />
          <motion.circle cx="950" cy="180" r="3" fill="#C5165C" animate={{ r: [3, 5, 3] }} transition={{ repeat: Infinity, duration: 4, delay: 3 }} />
          <circle cx="920" cy="340" r="3" fill="#94A3B8" />
          <circle cx="450" cy="140" r="2.5" fill="#C5165C" />
          <circle cx="520" cy="100" r="2" fill="#FF8A00" />
          <circle cx="750" cy="140" r="2.5" fill="#C5165C" />
          <circle cx="680" cy="100" r="2" fill="#FF8A00" />
          
          <g fill="#94A3B8" fontSize="8" fontFamily="monospace" opacity="0.6">
            <text x="210" y="170">NODE_01_A</text>
            <text x="960" y="170">NODE_06_B</text>
            <text x="420" y="130">SYS_A</text>
            <text x="760" y="130">SYS_B</text>
          </g>
        </svg>
      </motion.div>

      {/* ── BACKGROUND LAYER 6: Very soft radial lighting behind the active card (<4% opacity) ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          background: "radial-gradient(circle at 50% 60%, #C5165C 0%, #FF8A00 35%, transparent 65%)"
        }}
      />

      {/* ── LIGHTING LAYERS ── */}
      <div
        className="absolute inset-x-0 top-0 h-[300px] pointer-events-none z-0 opacity-[0.03]"
        style={{
          background: "radial-gradient(circle at 50% 0%, #FF8A00 0%, transparent 70%)"
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-[400px] pointer-events-none z-0 opacity-[0.015]"
        style={{
          background: "radial-gradient(circle at 0% 50%, #C5165C 0%, transparent 75%)"
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[400px] pointer-events-none z-0 opacity-[0.015]"
        style={{
          background: "radial-gradient(circle at 100% 50%, #FF8A00 0%, transparent 75%)"
        }}
      />

      <div className="relative z-10 w-full">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-10">
          <span
            className="font-bold uppercase block mb-3 font-sans tracking-[0.25em]"
            style={{
              fontSize: 11,
              color: '#C5165C',
            }}
          >
            STRATEGIC TECHNOLOGY PARTNERS
          </span>
          <h2
            className="font-extrabold tracking-tight text-[#0F172A] mb-3 font-headline leading-tight"
            style={{
              fontSize: 'clamp(28px, 3.2vw, 42px)',
            }}
          >
            Collaborating with Global Technology Leaders to Deliver Intelligent Industrial Solutions
          </h2>
          <p
            className="font-sans text-slate-500 max-w-[850px] mx-auto text-base lg:text-[17px] leading-relaxed"
          >
            Our strategic partnerships enable us to combine industry expertise with world-class platforms, cloud technologies, industrial software, AI, analytics, and automation to accelerate enterprise transformation.
          </p>
        </div>

        {/* ── Premium Exhibition Carousel (no outer box) ── */}
        <div 
          onMouseEnter={handleMouseEnterCarousel}
          onMouseLeave={handleMouseLeaveCarousel}
          className="relative w-full mb-6 overflow-hidden"
        >
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
            <button
              onClick={() => handleNavigate('left')}
              className="group pointer-events-auto w-12 h-12 rounded-full border border-[#ECECEC] bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-white hover:border-[#C5165C]/30 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-slate-600 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => handleNavigate('right')}
              className="group pointer-events-auto w-12 h-12 rounded-full border border-[#ECECEC] bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-white hover:border-[#C5165C]/30 hover:shadow-md active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-slate-600 transition-transform duration-300 group-hover:translate-x-[8px]" />
            </button>
          </div>

          {/* Horizontal Connection Track Line */}
          <svg
            className="absolute inset-x-0 top-[173px] h-[2px] pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1200 2"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="horizontal-connect-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8C123B" stopOpacity="0.01" />
                <stop offset="30%" stopColor="#8C123B" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#C2185B" stopOpacity="0.25" />
                <stop offset="70%" stopColor="#8C123B" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#8C123B" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <line
              x1="0"
              y1="1"
              x2="1200"
              y2="1"
              stroke="url(#horizontal-connect-gradient)"
              strokeWidth="1.2"
              strokeDasharray="4,8"
            />
            {/* Travelling micro particles on straight line */}
            <circle r="2.0" fill="#C2185B" opacity="0.6">
              <animateMotion dur="20s" repeatCount="indefinite" path="M 0,1 L 1200,1" />
            </circle>
            <circle r="1.5" fill="#8C123B" opacity="0.5">
              <animateMotion dur="15s" repeatCount="indefinite" path="M 1200,1 L 0,1" />
            </circle>
          </svg>

          {/* Active Card Warm Glow Spotlight behind the center card slot */}
          <div
            className="absolute pointer-events-none z-0 w-[450px] h-[450px] overflow-visible flex items-center justify-center"
            style={{
              left: "50%",
              marginLeft: "-225px",
              top: "148px",
              marginTop: "-225px",
            }}
          >
            <div
              className="absolute w-[350px] h-[350px] rounded-full blur-[70px] opacity-[0.035]"
              style={{
                background: "radial-gradient(circle, #8C123B 20%, #C2185B 80%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative w-full py-4">
            {/* Horizontal Coverflow Container */}
            <motion.div
              variants={cardsContainerVariants}
              className="relative w-full h-[360px] flex items-center justify-center overflow-visible z-10 py-2"
            >
              {PARTNERS_DATA.map((partner, idx) => (
                <PartnerCard
                  key={idx}
                  partner={partner}
                  onClick={() => handleCardClick(idx)}
                  index={idx}
                  wrappedIndex={wrappedIndex}
                  spacing={spacing}
                  hoveredIdx={hoveredIdx}
                  setHoveredIdx={setHoveredIdx}
                  N={N}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Footer CTA Button ── */}
        <div className="mt-8 flex justify-center w-full relative z-20">
          <motion.button
            onClick={handleContactNavigation}
            whileHover={{
              boxShadow: '0px 12px 30px rgba(140, 18, 59, 0.22)',
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden flex items-center gap-3 text-[13px] font-extrabold text-white px-9 py-4 rounded-full shadow-md transition-all duration-300 cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #8C123B 0%, #C2185B 100%)',
            }}
          >
            <span className="relative z-10 font-sans tracking-wider uppercase">Explore All Partnerships</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-[8px]" />
          </motion.button>
        </div>

      </div>
    </Section>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PARTNER CARD SUB-COMPONENT
   ═══════════════════════════════════════════════════════════════ */

interface PartnerCardProps {
  partner: PartnerItem
  onClick: () => void
  index: number
  wrappedIndex: any // MotionValue
  spacing: number
  hoveredIdx: number | null
  setHoveredIdx: (idx: number | null) => void
  N: number
}

function PartnerCard({
  partner,
  onClick,
  index,
  wrappedIndex,
  spacing,
  hoveredIdx,
  setHoveredIdx,
  N
}: PartnerCardProps) {
  const hoverOffset = useMotionValue(0)
  const hoverScale = useMotionValue(1.0)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorOpacity = useMotionValue(0)
  
  const floatBreathe = useMotionValue(0)
  const logoBreathe = useMotionValue(0)

  // Set up breathing timers on mount (Floating: 3.5s loop, Logo: 3s loop)
  useEffect(() => {
    const floatControls = animate(floatBreathe, [-1, 1, -1], {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut"
    })
    const logoControls = animate(logoBreathe, [0, 1, 0], {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    })
    return () => {
      floatControls.stop()
      logoControls.stop()
    }
  }, [])

  // Continuous wrapped diff calculation in range [-N/2, N/2]
  const cardDiff = useTransform(wrappedIndex, (wrapped) => {
    let diff = (index - (wrapped as number)) % N
    const half = N / 2
    if (diff > half) diff -= N
    if (diff < -half) diff += N
    return diff
  })

  // Cosine transition threshold T = 1.0 (decays fully to adjacent status)
  const activeRatio = useTransform(cardDiff, (diff) => {
    const absDiff = Math.abs(diff as number)
    if (absDiff >= 1) return 0
    return Math.cos(absDiff * Math.PI / 2)
  })

  // Coverflow linear horizontal translation mapping
  const x = useTransform(cardDiff, (diff) => (diff as number) * spacing)

  // Floating active loop + hover Y lift
  const y = useTransform([activeRatio, floatBreathe, hoverOffset], ([ratio, float, hover]) => {
    const activeFloat = (ratio as number) * (float as number) * 2 // 2px floating only when active
    const hoverLift = hover as number // -6px on hover
    return activeFloat + hoverLift
  })

  // Centered card is scaled 1.12x
  const scale = useTransform(activeRatio, [0, 1], [1.0, 1.12])

  // Center card is 1.0, inactive is 0.75, wraps fade to 0
  const opacity = useTransform(cardDiff, (diff) => {
    const absDiff = Math.abs(diff as number)
    if (absDiff <= 0.8) {
      return 1.0 - (absDiff / 0.8) * 0.25
    } else if (absDiff <= 2.0) {
      return 0.75
    } else {
      const t = Math.min(1, (absDiff - 2.0) / 0.8)
      return 0.75 * (1 - t)
    }
  })

  const zIndex = useTransform(activeRatio, (ratio) => {
    return Math.round(10 + (ratio as number) * 20)
  })

  // Inactive logo scale is 1.0. Active logo is 1.04x and breathes slightly
  const logoScale = useTransform([activeRatio, logoBreathe], ([ratio, breathe]) => {
    const activeZoom = 1.0 + 0.04 * (ratio as number)
    const breatheEffect = 1.0 + 0.02 * (breathe as number) * (ratio as number)
    return activeZoom * breatheEffect
  })

  // Inactive logo is slightly muted (0.65), brightens to 0.95 on hover or active
  const logoOpacity = useTransform([activeRatio, hoverOffset], ([ratio, hover]) => {
    const r = ratio as number
    const h = hover as number
    if (r > 0.1) return 0.95 + 0.05 * r
    if (h < 0) return 0.95
    return 0.65
  })

  // Active shadows with warm spotlight glow
  const boxShadow = useTransform(activeRatio, (ratio) => {
    const r = ratio as number
    if (r === 0) {
      return '0 2px 8px rgba(0, 0, 0, 0.02), 0 8px 20px rgba(0, 0, 0, 0.03)'
    }
    return `0 4px 12px rgba(0, 0, 0, 0.03), 0px 20px 40px rgba(140, 18, 59, ${0.12 * r})`
  })

  // Hairline border that strengthens on hover
  const borderStyle = useTransform([activeRatio, hoverOffset], ([ratio, hover]) => {
    if ((ratio as number) > 0.1) return 'none'
    if ((hover as number) < 0) return '1px solid rgba(140, 18, 59, 0.3)' // Strengthen border on hover
    return '1px solid #ECECEC'
  })

  // CTA button transitions
  const ctaOpacity = activeRatio
  const ctaHeight = useTransform(activeRatio, [0, 1], [0, 36])

  // Mouse tilt handlers (Active card only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    cursorX.set(e.clientX - box.left)
    cursorY.set(e.clientY - box.top)
    cursorOpacity.set(1)
  }

  const handleMouseEnter = () => {
    setHoveredIdx(index)
    animate(hoverOffset, -6, { duration: 0.3, ease: "easeOut" }) // Lift 6px on hover
    animate(hoverScale, 1.03, { duration: 0.8, ease: "easeOut" })
  }

  const handleMouseLeave = () => {
    setHoveredIdx(null)
    animate(hoverOffset, 0, { duration: 0.3, ease: "easeOut" })
    animate(hoverScale, 1.0, { duration: 0.8, ease: "easeOut" })
    cursorOpacity.set(0)
  }

  const Logo = partner.logo
  const Icon = partner.domainIcon

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "absolute",
        left: "50%",
        marginLeft: "-140px", // half of card width (280px)
        top: "30px",
        width: "280px",
        height: "300px",
        x,
        y,
        scale,
        opacity,
        zIndex,
        boxShadow,
        border: borderStyle,
      }}
      className="group rounded-[16px] bg-[#FFFFFF] flex flex-col justify-between overflow-hidden cursor-pointer select-none transition-colors duration-300"
    >
      {/* Cursor Glow Overlay Effect */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          opacity: cursorOpacity,
          x: "-50%",
          y: "-50%",
        }}
        className="absolute w-32 h-32 rounded-full pointer-events-none bg-[#8C123B]/10 blur-2xl z-0"
      />

      {/* Flowing active gradient border */}
      <motion.div
        style={{
          opacity: activeRatio,
        }}
        className="absolute inset-0 rounded-[16px] pointer-events-none z-10"
      >
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear"
          }}
          className="w-full h-full rounded-[16px]"
          style={{
            border: '2px solid transparent',
            background: 'linear-gradient(90deg, #8C123B, #C2185B, #8C123B) border-box',
            backgroundSize: '200% 100%',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          }}
        />
      </motion.div>

      {/* Soft inner glow on active card */}
      <motion.div
        style={{
          opacity: activeRatio,
        }}
        className="absolute inset-0 rounded-[16px] pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,138,0,0.02),transparent_70%)]"
      />

      {/* Card Content Layout */}
      <div className="flex flex-col justify-between h-full w-full relative z-10 pointer-events-none p-6 text-center">
        {/* Logo Area — hero element, large and prominent */}
        <div className="flex justify-center items-center mb-5" style={{ height: '88px' }}>
          <motion.div
            style={{ scale: logoScale, opacity: logoOpacity }}
            className="flex items-center justify-center w-full h-full"
          >
            <img
              src={partner.logoSrc}
              alt={partner.name}
              style={{
                maxWidth: '180px',
                maxHeight: '80px',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
              }}
              onError={(e) => {
                // fallback: hide broken img and show the inline SVG
                const target = e.currentTarget as HTMLImageElement
                target.style.display = 'none'
                const sibling = target.nextElementSibling as HTMLElement | null
                if (sibling) sibling.style.display = 'flex'
              }}
            />
            {/* Inline SVG fallback (hidden by default) */}
            <div style={{ display: 'none', maxWidth: '180px', margin: '0 auto' }} className="items-center justify-center w-full h-full">
              <Logo className="max-h-[80px] w-auto object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Capability Text & Description */}
        <div className="flex-grow flex flex-col justify-center mb-4">
          <motion.h5
            style={{
              opacity: useTransform(activeRatio, [0, 1], [0.85, 1.0])
            }}
            className="text-[14px] font-bold text-slate-800 mb-2 font-headline tracking-tight"
          >
            {partner.capabilityTitle}
          </motion.h5>
          <motion.p
            style={{
              opacity: useTransform(activeRatio, [0, 1], [0.65, 0.85])
            }}
            className="text-[11px] text-slate-500 leading-relaxed font-sans line-clamp-3"
          >
            {partner.desc}
          </motion.p>
        </div>

        {/* Explore Partnership CTA */}
        <motion.div
          style={{
            opacity: ctaOpacity,
            height: ctaHeight,
          }}
          className="overflow-hidden w-full flex justify-center"
        >
          <div
            onClick={(e) => e.preventDefault()}
            className="flex items-center justify-center text-[#C5165C] transition-all hover:scale-110 active:scale-95 duration-200 select-none p-2 rounded-full bg-slate-50 border border-slate-100/80 hover:bg-[#C5165C]/5 shadow-sm pointer-events-auto cursor-pointer"
          >
            <ArrowRight className="w-4.5 h-4.5" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}