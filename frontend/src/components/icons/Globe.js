import React from 'react';
import PropTypes from 'prop-types';


function Globe(props) {
  return (
    <svg width="14px" height="15px" viewBox="0 0 14 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-843.000000, -233.000000)" fill="#3E3E3E">
          <g transform="translate(633.000000, 218.000000)">
            <g transform="translate(188.000000, 0.000000)">
              <path d="M29.0000082,15.4285564 C32.785727,15.4285564 35.8571592,18.4999887 35.8571592,22.2857075 C35.8571592,26.0714263 32.785727,29.1428585 29.0000082,29.1428585 C25.2142894,29.1428585 22.1428571,26.0714263 22.1428571,22.2857075 C22.1428571,18.4999887 25.2142894,15.4285564 29.0000082,15.4285564 Z M31.7046525,20.1357804 C31.7018794,20.1351392 31.6991395,20.1345191 31.69644,20.1339192 C31.6964818,20.1339072 31.6965236,20.1338953 31.6965654,20.1338834 L31.7046525,20.1357804 Z M31.6965654,20.1338834 C31.7590476,20.1161098 31.8393331,20.1517525 31.8928688,20.116062 C32.0089403,20.0357048 31.9285831,19.9999905 31.8303687,19.9732047 C31.7053685,19.9374904 31.5446541,20.0178476 31.4464397,20.0803477 C31.3878204,20.1243122 31.3472412,20.1983435 31.2852223,20.2333518 C31.302774,20.1820872 31.3356946,20.0732457 31.3571538,20.0446334 C31.4107253,19.9821333 31.482154,19.946419 31.5535826,19.9107046 C31.7053685,19.8482046 31.8571544,19.8303474 32.0178689,19.8035617 C32.1694981,19.7678842 32.3567678,19.7678474 32.4728668,19.9013616 C32.4485311,19.8731617 32.6608577,19.6874465 32.6875126,19.6785615 C32.7678698,19.6339186 32.9017985,19.6517758 32.95537,19.5714185 C32.9732272,19.5446328 32.9732272,19.3749897 32.9732272,19.3749897 C32.822803,19.3926867 32.7688389,19.2525398 32.7591923,19.1283578 C32.7588193,19.1341007 32.7409623,19.1608255 32.7053697,19.1964181 C32.7142983,19.0624893 32.5446553,19.1607037 32.4821552,19.1428466 C32.2767978,19.0892751 32.3035835,18.9464178 32.2410835,18.7946319 C32.2053691,18.7142746 32.1071547,18.6874889 32.0714404,18.6071317 C32.0357261,18.5535602 32.0178689,18.4374886 31.9375117,18.42856 C31.8839402,18.4196314 31.7857258,18.6160602 31.7678686,18.6071317 C31.6875114,18.5624887 31.651797,18.6249888 31.589297,18.6607032 C31.5357255,18.6964175 31.4910826,18.6785603 31.4375111,18.7053461 C31.5950326,18.6528389 31.3751515,18.5660224 31.2906901,18.5794073 C31.4104594,18.5440622 31.3480733,18.4105699 31.2767966,18.3482028 L31.3214395,18.3482028 C31.3035823,18.2678455 31.0535821,18.1964169 30.9732248,18.1428454 C30.8928676,18.0892739 30.4642956,17.9999881 30.3750098,18.0535596 C30.2678668,18.1160596 30.4017956,18.2946313 30.4017956,18.3839171 C30.4107241,18.4910601 30.2946526,18.5178458 30.2946526,18.6071317 C30.2946526,18.7589176 30.5803672,18.7321318 30.5089385,18.9374892 C30.4642956,19.0624893 30.2946526,19.0892751 30.2232239,19.1874895 C30.1517953,19.2767753 30.2321525,19.4374898 30.3035812,19.4999899 C30.3750098,19.5535614 30.178581,19.6428472 30.1517953,19.6607043 C30.0000094,19.732133 29.8839378,19.5089184 29.8482235,19.3749897 C29.8214377,19.2767753 29.8125091,19.1607037 29.7053662,19.1071323 C29.6517947,19.0892751 29.4821516,19.0624893 29.4464373,19.1160608 C29.3928658,18.9821321 29.2053656,18.9285606 29.0803654,18.8839177 C28.9017938,18.8214176 28.7500079,18.8214176 28.5625077,18.8482034 C28.6250077,18.8392748 28.5446505,18.5624887 28.3928646,18.6071317 C28.4375075,18.5178458 28.4196503,18.4196314 28.4375075,18.3303456 C28.4553647,18.258917 28.491079,18.1874883 28.5446505,18.1249882 C28.5625077,18.0892739 28.7589365,17.8839165 28.6964364,17.8749879 C28.8482223,17.8928451 29.0178653,17.9017737 29.1428655,17.7767735 C29.2232227,17.6964163 29.2589371,17.5624876 29.3392943,17.4732017 C29.4553659,17.339273 29.5982232,17.5089161 29.7232233,17.5178446 C29.901795,17.5267732 29.8928664,17.3303444 29.794652,17.2410586 C29.9107235,17.2499872 29.8125091,17.0357012 29.7500091,17.0089155 C29.6697208,16.9821527 29.3666008,17.0623491 29.5263818,17.1248261 C29.4895001,17.1104151 29.276333,17.5527354 29.1517941,17.3303444 C29.1160797,17.2857015 29.0982226,17.0982013 29.0178653,17.0892727 C28.9497959,17.0892727 28.906052,17.1622495 28.8789065,17.2154767 C28.9191668,17.1069978 28.6249564,17.0267653 28.5625077,17.0178441 C28.6964364,16.9285582 28.5892934,16.8303438 28.491079,16.7767723 C28.4196503,16.7321294 28.1964358,16.6964151 28.1339357,16.7678438 C27.9642927,16.9732011 28.3125074,16.9999869 28.4017932,17.0535584 C28.4285789,17.0714155 28.5357219,17.1339156 28.4732218,17.1785585 C28.4196503,17.2053443 28.2589359,17.2499872 28.2410787,17.2857015 C28.1875072,17.3660588 28.3035788,17.4553446 28.2232215,17.5357018 C28.1446251,17.4571053 28.1429029,17.3272594 28.0843842,17.2380625 C28.1436126,17.3280627 27.7591275,17.2767729 27.7678638,17.2767729 C27.6339351,17.2767729 27.4196491,17.3660588 27.3214347,17.23213 C27.3037042,17.1966689 27.3035785,16.9939615 27.3560178,17.0347893 C27.2762913,16.9726178 27.2229701,16.9105342 27.1696488,16.8749867 C26.8750056,16.9732011 26.5982196,17.0982013 26.3303621,17.2410586 C26.3660765,17.2499872 26.3928622,17.2499872 26.4375051,17.23213 C26.5089338,17.2053443 26.5714339,17.1607014 26.6428625,17.124987 C26.7321483,17.0892727 26.9196486,16.9821297 27.017863,17.062487 C27.0267915,17.0446298 27.0535773,17.0267726 27.0625059,17.0178441 C27.1250059,17.0892727 27.187506,17.1607014 27.2410775,17.2410586 C27.1696488,17.2053443 27.0535773,17.2232014 26.97322,17.23213 C26.91072,17.2499872 26.803577,17.2678443 26.7767912,17.339273 C26.803577,17.3839159 26.8392913,17.4553446 26.8214341,17.4999875 C26.7053626,17.4196302 26.6160768,17.2857015 26.4553623,17.2678443 C26.3839336,17.2678443 26.312505,17.2678443 26.2589335,17.2767729 C25.4017896,17.7499878 24.6785745,18.4374886 24.1607167,19.2589182 C24.196431,19.2946325 24.2321453,19.3214182 24.2678597,19.3303468 C24.3571455,19.3571326 24.2678597,19.6160614 24.4375027,19.4821327 C24.4910742,19.5267756 24.5000028,19.5892757 24.4642885,19.6517758 C24.4732171,19.6428472 24.8303603,19.8749903 24.8571461,19.8928475 C24.9196462,19.946419 25.0178606,20.008919 25.0446463,20.0803477 C25.0625035,20.1428478 25.008932,20.2142764 24.9553605,20.2410622 C24.9464319,20.223205 24.8125032,20.0892763 24.794646,20.1249906 C24.7679502,20.1694837 24.7944668,20.4090895 24.8918741,20.4018581 C24.7502826,20.4131826 24.8124232,20.9645173 24.7767889,21.0714203 C24.7767889,21.0803489 24.794646,21.0803489 24.794646,21.0803489 C24.7679172,21.187264 24.8567669,21.6053519 25.0345798,21.5627708 C24.9217705,21.5919921 25.2412229,22.0000815 25.285718,22.0267786 C25.4017896,22.1071358 25.5357183,22.1607073 25.6160756,22.2767789 C25.7053614,22.401779 25.7053614,22.5892793 25.8303615,22.6874937 C25.7946472,22.7946367 26.0178618,22.9196368 26.0089332,23.0714227 C25.991076,23.0803513 25.9821474,23.0803513 25.9642903,23.0892799 C26.0089332,23.21428 26.1785762,23.21428 26.2410763,23.3303516 C26.2767906,23.4017802 26.2410763,23.5714233 26.3571479,23.535709 C26.375005,23.3392802 26.2410763,23.1428514 26.1428619,22.9821369 C26.0892904,22.8928511 26.0357189,22.8124938 25.991076,22.723208 C25.9464331,22.6428508 25.9375045,22.5446364 25.9017902,22.4553505 C25.9375045,22.4642791 26.1339333,22.5357078 26.1160762,22.5624935 C26.0446475,22.7410652 26.4017908,23.0535655 26.5000052,23.1696371 C26.5267909,23.1964228 26.7321483,23.4642803 26.6250053,23.4642803 C26.7410769,23.4642803 26.9017914,23.6428519 26.9553629,23.7321378 C27.0357201,23.8660665 27.017863,24.0357096 27.0714344,24.1785669 C27.1250059,24.3571385 27.3750062,24.4374958 27.5178636,24.517853 C27.6428637,24.5803531 27.7500067,24.6696389 27.8750068,24.7142818 C28.0625071,24.7857105 28.10715,24.7232104 28.2678644,24.6964246 C28.5000076,24.6607103 28.5267933,24.9196392 28.7142935,25.0178536 C28.8301214,25.0802224 29.0793161,25.1692646 29.2045765,25.1164036 C29.1542848,25.1377073 29.3929583,25.5001357 29.4107229,25.5267828 C29.4910802,25.6339258 29.6428661,25.6874972 29.7321519,25.7946402 C29.7589377,25.7767831 29.7857234,25.7499973 29.794652,25.714283 C29.7589377,25.8124974 29.9285807,25.9999976 30.0178665,25.9821405 C30.1160809,25.9642833 30.1428667,25.7678545 30.1428667,25.6964258 C29.964295,25.7857116 29.8035806,25.714283 29.7053662,25.5357113 C29.687509,25.4910684 29.5446517,25.2410681 29.6696518,25.2410681 C29.8392949,25.2410681 29.7232233,25.1071394 29.7053662,24.9821393 C29.687509,24.8571391 29.5625088,24.7767819 29.5000088,24.6696389 C29.4464373,24.7767819 29.2678656,24.7499961 29.2142941,24.6607103 C29.2142941,24.6874961 29.1875084,24.732139 29.1875084,24.7678533 C29.1428655,24.7678533 29.0982226,24.7767819 29.0535797,24.7589247 C29.0714368,24.6517817 29.0803654,24.517853 29.1071512,24.4017814 C29.1517941,24.2410669 29.4464373,23.9285666 29.0625082,23.9464237 C28.9285795,23.9553523 28.875008,24.0089238 28.8303651,24.1249954 C28.7857222,24.2321384 28.8035794,24.3303528 28.6785792,24.3839243 C28.598222,24.4196386 28.3303645,24.4017814 28.2500073,24.3571385 C28.0803642,24.2589241 27.9642927,23.9464237 27.9642927,23.7678521 C27.9553641,23.5267804 28.0803642,23.3124944 27.9642927,23.0892799 C28.0178641,23.0446369 28.0714356,22.9553511 28.1339357,22.9107082 C28.1875072,22.8749939 28.2500073,22.937494 28.276793,22.830351 C28.2524636,22.8141314 28.2207681,22.7831795 28.2084689,22.7776392 C28.3438323,22.8365369 28.5903497,22.6883062 28.705365,22.7767795 C28.7767936,22.830351 28.8571509,22.8482081 28.9017938,22.7589223 C28.9107224,22.7321366 28.8392937,22.6249936 28.875008,22.5535649 C28.9017938,22.7053508 29.0000082,22.7321366 29.1339369,22.6339222 C29.1875084,22.6874937 29.3303657,22.6696365 29.4285801,22.723208 C29.5267945,22.7857081 29.5446517,22.8839225 29.6607232,22.7499937 C29.7321519,22.8571367 29.7410805,22.8571367 29.7678662,22.9642797 C29.794652,23.0624941 29.8482235,23.3124944 29.9375093,23.3571373 C30.1250095,23.4732089 30.0803666,23.1607085 30.0625094,23.0535655 C30.0535809,23.0446369 30.0535809,22.7499937 30.0446523,22.7499937 C29.7589377,22.6874937 29.8660806,22.4642791 30.0267951,22.3124932 C30.0535809,22.2946361 30.2589382,22.2232074 30.3482241,22.1517787 C30.4285813,22.0803501 30.5267957,21.9553499 30.4821528,21.8392784 C30.5267957,21.8392784 30.56251,21.803564 30.5803672,21.7589211 C30.5543496,21.7502486 30.4525173,21.6657614 30.4303338,21.6691053 C30.4910408,21.6336783 30.4820719,21.5802282 30.4464385,21.526778 C30.5357243,21.4732065 30.4910814,21.3749921 30.5803672,21.3392778 C30.6785816,21.4732065 30.8750104,21.3214206 30.776796,21.2142776 C30.8660818,21.0892775 31.0714392,21.1517776 31.1250107,21.035706 C31.2589394,21.0714203 31.160725,20.9017773 31.2321537,20.8035628 C31.2946538,20.7232056 31.4017968,20.7232056 31.482154,20.6785627 C31.482154,20.6874913 31.7053685,20.5535626 31.6339399,20.544634 C31.7857258,20.5624911 32.0892976,20.4017767 31.8571544,20.2678479 C31.891669,20.1901903 31.7844246,20.1542264 31.7046525,20.1357804 L31.6965654,20.1338834 Z M30.4303338,21.6691053 C30.4296789,21.669204 30.4290934,21.6693793 30.4285813,21.6696353 C30.4287228,21.6695544 30.428864,21.6694735 30.4290048,21.6693924 L30.4303338,21.6691053 Z M28.2084689,22.7776392 C28.2072272,22.7770798 28.2061831,22.7767795 28.2053644,22.7767795 C28.2065832,22.7773483 28.2078116,22.7778993 28.2090495,22.7784329 L28.2084689,22.7776392 Z M29.204557,25.1163733 C29.2048186,25.1162623 29.2050882,25.1161605 29.2053656,25.116068 C29.2051031,25.1161805 29.2048401,25.1162923 29.2045765,25.1164036 L29.204557,25.1163733 Z M25.0345798,21.5627708 C25.0349587,21.5626801 25.035338,21.5625873 25.0357177,21.5624923 C25.0353336,21.562581 25.0349543,21.5626738 25.0345798,21.5627708 Z M24.8919037,20.4018448 C24.8922216,20.4018194 24.8925405,20.4017967 24.8928604,20.4017767 C24.8925308,20.4018066 24.892202,20.4018338 24.8918741,20.4018581 L24.8919037,20.4018448 Z M28.0843842,17.2380625 C28.0830732,17.2360643 28.0817337,17.2340864 28.0803642,17.23213 C28.0820941,17.2342444 28.0836006,17.2362884 28.0848925,17.2382641 L28.0843842,17.2380625 Z M28.8789065,17.2154767 C28.8775669,17.2181034 28.8762677,17.2206821 28.875008,17.2232014 C28.8750447,17.223106 28.8750812,17.2230107 28.8751174,17.2229153 L28.8789065,17.2154767 Z M29.5263919,17.1248083 C29.5265285,17.1248616 29.5266627,17.1249211 29.5267945,17.124987 C29.5266566,17.1249334 29.526519,17.1248798 29.5263818,17.1248261 L29.5263919,17.1248083 Z M31.2906901,18.5794073 C31.2889781,18.5796787 31.2873217,18.5799911 31.2857252,18.5803459 C31.2859911,18.5802699 31.2862561,18.5801935 31.2865203,18.5801167 L31.2906901,18.5794073 Z M32.7591923,19.1283578 C32.759105,19.1272337 32.7590213,19.1261108 32.7589406,19.1249894 C32.7589412,19.1250198 32.758941,19.1250505 32.7589406,19.1250813 L32.7591923,19.1283578 Z M31.2852223,20.2333518 C31.27167,20.2410018 31.257094,20.2467884 31.2410823,20.2499908 C31.2499598,20.2482153 31.2588372,20.2404376 31.2675743,20.2288343 L31.2852223,20.2333518 Z M30.2959041,25.7408756 C30.2904789,25.7359639 30.2868878,25.7301946 30.285724,25.7232116 C30.2861119,25.7255392 30.2864957,25.727868 30.2868753,25.7301977 L30.2959041,25.7408756 Z M30.2868753,25.7301977 C30.3214436,25.9423458 30.3219233,26.1630398 30.3660812,26.3749981 C30.392867,26.4999982 30.3660812,26.7053556 30.2589382,26.80357 C30.1517953,26.9017844 30.0178665,27.0089274 30.0000094,27.1607133 C29.9821522,27.2678563 30.0089379,27.3660707 30.1071524,27.3928564 C30.1160809,27.5267852 29.964295,27.6249996 29.9732236,27.7678569 C29.9732236,27.7767854 29.9821522,27.8660713 29.9910808,27.9107142 C31.2142965,27.6964282 32.3035835,27.0892846 33.1250131,26.2232122 C33.0714416,26.1696407 32.9732272,26.1874978 32.9017985,26.1517835 C32.8303699,26.1249978 32.7767984,26.098212 32.6875126,26.0803549 C32.7053697,25.9017832 32.5089409,25.8392831 32.3839408,25.7499973 C32.2678692,25.6607115 32.1964406,25.5624971 32.0267975,25.5982114 C32.0089403,25.60714 31.8303687,25.6696401 31.866083,25.7053544 C31.7500115,25.60714 31.69644,25.5535685 31.5446541,25.5089256 C31.4017968,25.4642827 31.3035823,25.2857111 31.160725,25.4464255 C31.118867,25.4882835 31.1138029,25.5424061 31.1095967,25.5944189 C31.0890577,25.5201485 31.1660164,25.4456324 31.1071535,25.3749969 C31.0000106,25.2499967 30.8125103,25.4553541 30.7232245,25.5089256 C30.669653,25.5535685 30.6071529,25.5714257 30.5714386,25.6249972 C30.5267957,25.6874972 30.5089385,25.7678545 30.4732242,25.8303546 C30.44993,25.7682366 30.332099,25.7736448 30.2959041,25.7408756 L30.2868753,25.7301977 Z M31.1095967,25.5944189 C31.1066251,25.6311635 31.1040817,25.6668552 31.0892964,25.6964258 C31.0497466,25.6629606 31.0495883,25.6274222 31.063037,25.5908701 L31.1095967,25.5944189 Z" id="public-globe-ico" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}


export default Globe;