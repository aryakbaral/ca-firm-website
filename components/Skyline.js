/* Kathmandu Valley horizon, structural line-art:
   stupa (dome + harmika + stepped spire), pagodas built as
   trapezoid roofs with upturned corner ticks and visible wall
   heights between tiers, shikhara with corner turrets. */
export default function Skyline({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 220"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 w-full sm:h-40 ${className}`}
    >
      {/* hill contour + ground */}
      <path d="M0 150 C 240 128, 420 146, 640 134 C 860 122, 1080 142, 1290 128 C 1360 124, 1400 128, 1440 124" opacity="0.5" />
      <path d="M0 219 H1440" />

      {/* stupa */}
      <path d="M50 219 h120 M58 211 h104 M66 203 h88" />
      <path d="M70 203 A 40 40 0 0 1 150 203" />
      <path d="M98 163 v-12 h24 v12" />
      <path d="M100 151 h20 M101.5 146 h17 M103 141 h14 M104.5 136 h11 M106 131 h8 M107.5 126 h5" />
      <path d="M110 126 v-8 M104 118 h12 M110 118 v-6" />

      {/* three-tier pagoda */}
      <path d="M305 219 h150 M315 212 h130 M325 205 h110" />
      <path d="M346 205 V189 M414 205 V189" />
      <path d="M292 183 L300 189 L340 177 L420 177 L460 189 L468 183" />
      <path d="M354 177 V163 M406 177 V163" />
      <path d="M308 157 L316 163 L348 152 L412 152 L444 163 L452 157" />
      <path d="M362 152 V140 M398 152 V140" />
      <path d="M325 135 L332 140 L358 130 L402 130 L428 140 L435 135" />
      <path d="M380 130 V116 M374 116 h12 M380 116 V110" />

      {/* five-tier pagoda */}
      <path d="M685 219 h150 M694 213 h132 M703 207 h114 M712 201 h96 M721 195 h78" />
      <path d="M730 195 V183 M790 195 V183" />
      <path d="M680 177 L688 183 L724 172 L796 172 L832 183 L840 177" />
      <path d="M737 172 V161 M783 172 V161" />
      <path d="M695 156 L702 161 L731 151 L789 151 L818 161 L825 156" />
      <path d="M743 151 V141 M777 151 V141" />
      <path d="M708 137 L714 141 L737 132 L783 132 L806 141 L812 137" />
      <path d="M748 132 V123 M772 132 V123" />
      <path d="M718 119 L724 123 L742 115 L778 115 L796 123 L802 119" />
      <path d="M760 115 V101 M754 101 h12" />

      {/* shikhara with corner turrets */}
      <path d="M1000 219 h120 M1008 211 h104" />
      <path d="M1016 211 V171 M1104 211 V171 M1010 171 h100" />
      <path d="M1040 171 L1052 116 L1060 108 L1068 116 L1080 171" />
      <path d="M1060 108 V98 M1056 98 h8" />
      <path d="M1016 171 L1022 146 L1026 140 L1030 146 L1036 171" />
      <path d="M1084 171 L1090 146 L1094 140 L1098 146 L1104 171" />
      <path d="M1026 140 v-6 M1094 140 v-6" />
      <path d="M1052 211 v-16 h16 v16" />

      {/* two-tier pagoda */}
      <path d="M1240 219 h120 M1248 212 h104" />
      <path d="M1264 212 V198 M1336 212 V198" />
      <path d="M1226 192 L1234 198 L1267 187 L1333 187 L1366 198 L1374 192" />
      <path d="M1276 187 V175 M1324 187 V175" />
      <path d="M1243 170 L1250 175 L1275 165 L1325 165 L1350 175 L1357 170" />
      <path d="M1300 165 V152 M1294 152 h12" />
    </svg>
  );
}
