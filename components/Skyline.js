/* Hand-drawn line-art of the valley skyline: stupa, pagodas, shikhara, hills.
   Used as a low-opacity horizon on dark bands. */
export default function Skyline({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full sm:h-40 ${className}`}
    >
      {/* hills */}
      <path
        d="M0 152 C 180 122, 360 142, 540 130 C 720 118, 940 140, 1140 126 C 1280 117, 1370 130, 1440 122"
        opacity="0.6"
      />
      {/* ground */}
      <path d="M0 219 H1440" />
      {/* stupa */}
      <path d="M60 219 A 60 60 0 0 1 180 219" />
      <path d="M104 160 h32 v-14 h-32 z" />
      <path d="M112 146 L120 100 L128 146" />
      <path d="M114 132 h12 M115 122 h10 M116 112 h8" />
      <path d="M120 100 V88" />
      {/* three-tier pagoda */}
      <path d="M320 219 h120" />
      <path d="M300 196 Q 380 158 460 196" />
      <path d="M300 196 q -7 -3 -9 -10 M460 196 q 7 -3 9 -10" />
      <path d="M340 196 V178 M420 196 V178" />
      <path d="M318 178 Q 380 146 442 178" />
      <path d="M348 178 V162 M412 178 V162" />
      <path d="M330 162 Q 380 134 430 162" />
      <path d="M380 134 V118 M374 118 h12" />
      {/* five-tier pagoda */}
      <path d="M690 219 h140 M700 209 h120 M710 199 h100" />
      <path d="M688 199 Q 760 165 832 199" />
      <path d="M688 199 q -7 -3 -9 -9 M832 199 q 7 -3 9 -9" />
      <path d="M720 199 V183 M800 199 V183" />
      <path d="M700 183 Q 760 153 820 183" />
      <path d="M726 183 V169 M794 183 V169" />
      <path d="M708 169 Q 760 141 812 169" />
      <path d="M732 169 V157 M788 169 V157" />
      <path d="M716 157 Q 760 131 804 157" />
      <path d="M738 157 V146 M782 157 V146" />
      <path d="M724 146 Q 760 123 796 146" />
      <path d="M760 123 V106 M754 106 h12" />
      {/* shikhara */}
      <path d="M1010 219 V192 Q 1010 152 1050 122 Q 1090 152 1090 192 V219" />
      <path d="M1040 122 h20 M1050 122 V108 M1046 108 h8" />
      <path d="M998 219 V198 M1102 219 V198" />
      {/* two-tier pagoda */}
      <path d="M1210 219 h140" />
      <path d="M1220 204 Q 1280 172 1340 204" />
      <path d="M1220 204 q -6 -3 -8 -8 M1340 204 q 6 -3 8 -8" />
      <path d="M1248 204 V188 M1312 204 V188" />
      <path d="M1236 188 Q 1280 160 1324 188" />
      <path d="M1280 160 V146 M1274 146 h12" />
    </svg>
  );
}
