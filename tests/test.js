let cardata = [
  {
    "id": "5",
    "mdl": [
      {
        "id": "G68",
        "pkg": [
          {
            "id": "NULL",
            "prc": "1729000",
          }
        ]
      }
    ]
  },
  {
    "id": "6",
    "mdl": []
  },
  {
    "id": "8",
    "mdl": [
        {
            "id": "G14",
            "pkg": [
                {
                  "id": "DZ21_0ZOM",
                  "prc": "1208000"
                }
            ]
        },
        {
            "id": "G15",
            "pkg": [
                {
                    "id": "AE21_0ZOM",
                    "prc": "1108000"
                }
            ]
        }
    ]
  },
  {
    "id": "i",
    "mdl": [
        {
            "id": "G70BEV",
            "pkg": [
                {
                    "id": "41EJ_0ZLU",
                    "prc": "949000",
                }
            ]
        }
    ]
}
]

let filteredData = cardata.filter(item => item.mdl.length > 0 && item.mdl.every(mdlItem => mdlItem.pkg.some(pkgItem => pkgItem.id !== "NULL")));

console.log(filteredData);



// [
//   {
//     "id": "8",
//     "mdl": [
//         {
//             "id": "G14",
//             "pkg": [
//                 {
//                   "id": "DZ21_0ZOM",
//                   "prc": "1208000"
//                 }
//             ]
//         },
//         {
//             "id": "G15",
//             "pkg": [
//                 {
//                     "id": "AE21_0ZOM",
//                     "prc": "1108000"
//                 }
//             ]
//         }
//     ]
//   }
// ]