var FEATURES = [
  {
    'title': 'Toilet',
    'presence': false,
    'subfeatures': []
  },
  {
    'title': 'iHop',
    'presence': false,
    'subfeatures': []
  },
  {
    'title': 'Pets allowed',
    'presence': true,
    'subfeatures': []
  },
  {
    'title': 'Shower',
    'presence': false,
    'subfeatures': [
      {
        'title': 'Outdoor shower',
        'presence': true,
        'subfeatures': [
          {
            'title': 'Extra spiders',
            'presence': false,
            'subfeatures': []
          }
        ]
      },
      {
        'title': 'Indoor shower',
        'presence': false,
        'subfeatures': [
          {
            'title': 'Heated floors',
            'presence': false,
            'subfeatures': []
          }
        ]
      }
    ]
  },
  {
    'title': 'Wifi',
    'presence': true,
    'subfeatures': [
      {
        'title': 'fast',
        'presence': true,
        'subfeatures': [
          {
            'title': 'fiber',
            'presence': true,
            'subfeatures': []
          }
        ]
      },
      {
        'title': 'slow',
        'presence': true,
        'subfeatures': [
          {
            'title': 'painfully so',
            'presence': false,
            'subfeatures': [
              {
                'title': 'to the extent that you leave',
                'presence': false,
                'subfeatures': []
              }
            ]
          }
        ]
      },
    ]
  },
  {
    'title': 'Trash',
    'presence': true,
    'subfeatures': [
      {
        'title': 'Recycling bin',
        'presence': true,
        'subfeatures': []
      },
      {
        'title': 'Compost bin',
        'presence': false,
        'subfeatures': []
      },
      {
        'title': 'Trash bin',
        'presence': true,
        'subfeatures': [
          {
            'title': 'Pack in, pack out',
            'presence': true,
            'subfeatures': []
          },
          {
            'title': 'Pack out, pack in',
            'presence': true,
            'subfeatures': [
              {
                'title': 'Seriously, don\'t litter',
                'presence': true,
                'subfeatures': []
              }
            ]
          },
          {
            'title': 'Pack up, pack down',
            'presence': true,
            'subfeatures': []
          }
        ]
      }
    ]
  }
];
// var FEATURES = [
//   {
//     'title': 'Toilet',
//     'presence': false,
//     'subfeatures': []
//   },
//   {
//     'title': 'Pets allowed',
//     'presence': true,
//     'subfeatures': []
//   },
//   {
//     'title': 'Shower',
//     'presence': true,
//     'subfeatures': [
//       {
//         'title': 'Outdoor shower',
//         'presence': true,
//         'subfeatures': []
//       }
//     ]
//   },
//   {
//     'title': 'Trash',
//     'presence': true,
//     'subfeatures': [
//       {
//         'title': 'Recycling bin',
//         'presence': true,
//         'subfeatures': []
//       },
//       {
//         'title': 'Compost bin',
//         'presence': false,
//         'subfeatures': []
//       },
//       {
//         'title': 'Trash bin',
//         'presence': true,
//         'subfeatures': [
//           {
//             'title': 'Pack in, pack out',
//             'presence': true,
//             'subfeatures': []
//           }
//         ]
//       }
//     ]
//   }
// ];
export default FEATURES;
