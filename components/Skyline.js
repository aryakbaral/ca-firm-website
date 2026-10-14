/* Hand-drawn horizon of the Kathmandu Valley:
   a Boudha-style stupa (harmika + stepped spire), Patan pagodas with
   concave upturned eaves on stepped plinths, a Krishna-Mandir-style
   shikhara with corner turrets, and a hill contour behind. */
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
      {/* hill contour */}
      <path d="M0 150 C 240 128, 420 146, 640 134 C 860 122, 1080 142, 1290 128 C 1360 124, 1400 128, 1440 124" opacity="0.5" />
      {/* ground */}
      <path d="M0 219 H1440" />

      {/* stupa: plinth, dome, harmika, 13-step spire */}
      <path d="M50 219 h120 M58 211 h104 M66 203 h88" />
      <path d="M70 203 A 40 40 0 0 1 150 203" />
      <path d="M98 163 v-12 h24 v12" />
      <path d="M100 151 h20 M101.5 146 h17 M103 141 h14 M104.5 136 h11 M106 131 h8 M107.5 126 h5" />
      <path d="M110 126 v-8 M104 116 q6 -6 12 0" />

      {/* three-tier pagoda on stepped plinth */}
      <path d="M310 219 h140 M318 211 h124 M326 203 h108" />
      <path d="M346 203 v-14 M414 203 v-14" />
      <path d="M346 189 Q 320 193 300 199 M414 189 Q 440 193 460 199" />
      <path d="M300 199 Q 380 212 460 199" />
      <path d="M300 199 q -5 -5 -3 -11 M460 199 q 5 -5 3 -11" />
      <path d="M346 189 h68" />
      <path d="M352 189 v-13 M408 189 v-13" />
      <path d="M352 176 Q 332 180 316 185 M408 176 Q 428 180 444 185" />
      <path d="M316 185 Q 380 196 444 185" />
      <path d="M352 176 h56" />
      <path d="M366 176 v-11 M394 176 v-11" />
      <path d="M366 165 Q 350 168 338 172 M394 165 Q 410 168 422 172" />
      <path d="M338 172 Q 380 181 422 172" />
      <path d="M372 165 h16" />
      <path d="M380 165 v-10 M376 155 h8 M380 155 v-6" />

      {/* five-tier pagoda (Nyatapola-style) */}
      <path d="M690 219 h140 M698 212 h124 M706 205 h108 M714 198 h92 M722 191 h76" />
      <path d="M736 191 v-10 M784 191 v-10" />
      <path d="M736 181 Q 714 185 700 190 M784 181 Q 806 185 820 190" />
      <path d="M700 190 Q 760 200 820 190" />
      <path d="M700 190 q -5 -5 -3 -10 M820 190 q 5 -5 3 -10" />
      <path d="M736 181 h48" />
      <path d="M746 181 v-9 M774 181 v-9" />
      <path d="M746 172 Q 728 176 716 180 M774 172 Q 792 176 804 180" />
      <path d="M716 180 Q 760 189 804 180" />
      <path d="M746 172 h28" />
      <path d="M754 172 v-8 M766 172 v-8" />
      <path d="M754 164 Q 740 167 730 171 M766 164 Q 780 167 790 171" />
      <path d="M730 171 Q 760 178 790 171" />
      <path d="M756 164 h8" />
      <path d="M756 164 Q 748 166 742 169 M764 164 Q 772 166 778 169" />
      <path d="M742 169 Q 760 174 778 169" />
      <path d="M760 164 v-12 M756 152 h8" />

      {/* shikhara with corner turrets */}
      <path d="M1000 219 h120 M1008 211 h104" />
      <path d="M1016 211 v-40 M1104 211 v-40 M1010 171 h100" />
      <path d="M1040 171 Q 1042 130 1060 108 Q 1078 130 1080 171" />
      <path d="M1052 108 h16 M1060 108 v-10 M1057 98 h6" />
      <path d="M1016 171 Q 1018 148 1026 138 Q 1034 148 1036 171" />
      <path d="M1084 171 Q 1086 148 1094 138 Q 1102 148 1104 171" />
      <path d="M1026 138 v-6 M1094 138 v-6" />
      <path d="M1052 211 v-18 h16 v18" />

      {/* two-tier pagoda */}
      <path d="M1240 219 h120 M1248 212 h104" />
      <path d="M1264 212 v-12 M1336 212 v-12" />
      <path d="M1264 200 Q 1246 204 1234 208 M1336 200 Q 1354 204 1366 208" />
      <path d="M1234 208 Q 1300 218 1366 208" />
      <path d="M1264 200 h72" />
      <path d="M1278 200 v-10 M1322 200 v-10" />
      <path d="M1278 190 Q 1264 193 1254 197 M1322 190 Q 1336 193 1346 197" />
      <path d="M1254 197 Q 1300 205 1346 197" />
      <path d="M1288 190 h24" />
      <path d="M1300 190 v-10 M1296 180 h8" />
    </svg>
  );
}
