import React from 'react';
import { UtilityIconProps } from '@interfaces/SVGProps';
import { alpha, styled } from '@mui/material';
import svgCommonProps from '@utils/svgCommonProps';

const BaaghIcon = ({ hovered, active, ...props }: UtilityIconProps) => {
  return (
    <svg
      {...svgCommonProps}
      data-name='Baagh Icon'
      width='512'
      height='512'
      viewBox='0 0 512 512'
      {...props}
    >
      <defs>
        <style>
          {`
            .bagh__body{
              fill:#e18e3c;
            }
          `}
        </style>
      </defs>
      <path className="bagh__body"
        d="M294.42905,316.39541a85.1502,85.1502,0,0,0,9.6573-7.63985,218.26059,218.26059,0,0,0,15.83439-16.65349l-.093-.093-42.23463,9.99a116.07337,116.07337,0,0,0,16.83943,14.37146" />
      <path className="bagh__body"
        d="M319.03726,331.68251a51.27556,51.27556,0,0,0,19.93692-6.20926,39.133,39.133,0,0,0,10.07571-9.27465l-3.90582-6.50977a129.56565,129.56565,0,0,1-16.28144-10.04694,139.95018,139.95018,0,0,1-20.92411,25.11968A109.09769,109.09769,0,0,0,318.279,329.651Z" />
      <path className="bagh__body"
        d="M324.524,367.5969a50.03151,50.03151,0,0,0,5.0433,4.84653,180.26944,180.26944,0,0,1,19.97627-35.84288,65.26836,65.26836,0,0,1-33.49291,8.39111l-3.98454,8.155c4.2492,4.70343,8.11212,9.69663,12.44,14.43224" />
      <path className="bagh__body"
        d="M321.74487,383.86051a95.51974,95.51974,0,0,1-15.69848-18.34526l-2.34277,4.82151-11.52437-3.03313a15.974,15.974,0,0,0-17.24,7.98342c-2.57528,4.69986-5.5297,10.39052-7.89393,15.78791h55.08232s.71535-2.03159,1.99585-5.36513a24.73381,24.73381,0,0,1-2.34994-1.82771" />
      <path className="bagh__body"
        d="M203.89014,321.97515l-17.91605,39.924a15.54823,15.54823,0,0,1,10.75895,11.3992c-1.76335,6.524-5.798,18.80307-11.64959,21.61086H199.877c14.76137-24.179,10.53719-55.26832,4.01314-72.92684" />
      <path className="bagh__body"
        d="M173.72,351.76609a106.85791,106.85791,0,0,1-9.98992-11.646,97.05179,97.05179,0,0,1-9.48919,39.70217l-23.53861-4.60681A24.83008,24.83008,0,0,0,118.949,396.70834h50.62553l14.10322-35.59959c-3.6948-3.17622-7.04981-6.43834-9.98992-9.33185" />
      <path className="bagh__body"
        d="M403.03779,291.53324c-20.64512-7.81521-30.15932-16.7536-29.587-43.00711,0,0,1.11595,13.40576,17.88386,23.45645,7.15355,4.29209,15.47672,7.758,23.1453,11.8892a122.07341,122.07341,0,0,1-.22176-23.2884,151.61968,151.61968,0,0,0-14.24266-31.66521c4.56394-.43994,8.91332-1.01579,13.091-1.69537q-3.61968-9.72524-7.09988-19.497a4.43905,4.43905,0,0,1,0-3.15473,291.802,291.802,0,0,1-34.84134-8.70944,92.701,92.701,0,0,0-12.51873-8.38038,67.74848,67.74848,0,0,1-14.18907,14.68984,66.23847,66.23847,0,0,0-25.73131,29.605,58.80964,58.80964,0,0,1,14.536-32.93851c7.48619-8.10852,11.83557-10.64807,14.68984-16.07045a84.99864,84.99864,0,0,0-44.24831-2.77561c-.77613.13948-1.57378.2647-2.34992.39346-7.86893,4.97171-18.72444,15.73777-21.15306,37.98531-3.94528,35.72131-19.02486,55.82991-55.90143,61.40965,0,0,29.605-10.61227,39.65572-39.65569,7.93328-22.91639,3.02235-39.56993,16.75363-57.63617-8.36608.44709-16.886.45774-25.08393.16455a49.5134,49.5134,0,0,0-5.637,26.22491c1.24113,25.39511-14.207,43.99434-37.50606,46.57322a43.72594,43.72594,0,0,0,25.68483-30.40258c2.43221-13.3271.86559-29.54053,2.53236-43.279-3.82-.32187-7.47189-.71534-10.91633-1.1231-1.57377,29.88385-16.09548,41.61935-16.09548,41.61935a82.41957,82.41957,0,0,0,4.78573-43.304,35.40994,35.40994,0,0,1-16.12053-5.16129,13.13068,13.13068,0,0,0-2.35-2.68257,35.30634,35.30634,0,0,0-8.3017,20.20867c-2.79346,27.3695-34.62673,38.53975-34.62673,38.53975a75.84916,75.84916,0,0,0,23.48509-32.94566c3.0796-10.46564,3.78783-21.103,8.09068-29.83388H165.9978a35.732,35.732,0,0,0-5.54758,33.37139c3.34787,13.40929-9.68588,21.96852-9.68588,21.96852s5.95879-5.58693-1.85995-26.43951a35.71776,35.71776,0,0,1,.48646-26.92955c-3.02595.66885-6.34519,1.43075-9.72884,2.21406-9.49633,12.21111-5.12551,25.75278,2.53593,41.09713a28.86105,28.86105,0,0,1-2.97945,32.02287,71.86828,71.86828,0,0,0-11.54583-42.81758,34.85557,34.85557,0,0,1-6.13774-25.95308c-5.76578,1.4021-9.77176,2.40717-9.77176,2.40717l-7.67577,6.9103a17.78725,17.78725,0,0,0,1.53444-18.03764c-13.82066,9.5929-61.03408,28.02043-61.03408,28.02043l-1.91714,9.085A53.01906,53.01906,0,0,1,24,212.46162a33.87572,33.87572,0,0,0,17.14706,16.63557l2.83272-7.429c14.09965-1.28058,14.84005,16.63557,14.84005,16.63557l-11.51722-2.81489a40.6431,40.6431,0,0,1,8.69871,19.45051l19.708-15.35507,18.16645,1.02294c17.13989-14.58606,2.81491-35.0525,2.81491-35.0525,16.88952,15.61263,5.36517,36.07894,5.36517,36.07894a63.13135,63.13135,0,0,1,14.77207,7.91894,25.72772,25.72772,0,0,0,2.25693-18.914c-4.11328-19.36109-11.53865-27.18349-4.47094-40.21371a40.10268,40.10268,0,0,0,8.56626,30.55283,40.93975,40.93975,0,0,1,6.84593,39.84527,102.92135,102.92135,0,0,1,8.81317,9.9899l9.72525-23.02722L140.921,277.97016l6.50974,12.07521a83.44638,83.44638,0,0,0,12.63674-34.83419c2.79347-24.57959,36.30427-22.3262,46.355-55.85133,0,0,.59015,26.24993-15.07611,35.74988a40.65725,40.65725,0,0,0-20.6666,40.77521c1.39853,9.7753-5.49391,25.202-10.86265,35.41009,7.31452,8.60571,13.091,19.21441,20.96338,27.15127q4.17414,4.20283,8.70942,8.00479l11.30975-28.55691L194.662,288.72562c4.6069-1.53444,13.81351-16.89313,13.81351-16.89313a92.77284,92.77284,0,0,1-9.21378,17.40458l5.11476,24.56533,14.91518-3.3693a38.02043,38.02043,0,0,1,19.708-16.48894c14.89728-5.215,27.54114-26.06758,27.54114-26.06758s-4.11327,21.593-16.006,26.82582a27.31637,27.31637,0,0,0-11.57086,11.274l11.92847-2.69687a66.66019,66.66019,0,0,0,32.38434-43.27909c7.801-41.05065,16.73215-54.646,32.25178-65.22243,0,0-20.30178,32.16593-17.56194,61.3381,1.32689,14.14255-5.62984,28.4711-13.15185,39.49123l32.67023-7.38957a159.446,159.446,0,0,1,3.07248-36.33646s1.54161,30.70666,2.56453,32.241a53.29366,53.29366,0,0,0,16.03827,15.61262,71.804,71.804,0,0,1-4.8358-33.34631c3.727-28.2994,24.57961-34.25834,27.54118-53.61939a49.96772,49.96772,0,0,1-2.95446,27.541c-5.14687,10.28679-23.01653,29.4726,3.33,68.05874a51.953,51.953,0,0,0,8.48411.812l9.93269,7.0963c2.04947-.58661,4.01313-1.17315,5.79805-1.82413A85.84165,85.84165,0,0,0,414.73034,297.839a47.59929,47.59929,0,0,0-11.71051-6.30946" />
      <path className="bagh__body"
        d="M419.38725,348.801c1.58454.3005,3.38718.58662,5.56191.887a79.43835,79.43835,0,0,0,25.13751-.11084,51.995,51.995,0,0,0,2.02091-10.73035c-1.02295-1.53444-14.84-.51145-28.14553-23.02723-.887-1.50583-1.68112-3.07611-2.425-4.64979a82.64527,82.64527,0,0,1-23.47079,15.73785c-.52222.23964-1.07305.44709-1.58454.68315l22.21178,15.86283Z" />
      <path className="bagh__body"
        d="M438.95222,367.01394a72.99915,72.99915,0,0,1-17.31507-1.17316l1.29838,9.84331a75.96971,75.96971,0,0,0-18.42757-3.06887c-19.91187,6.63848-19.45048,20.47346-19.45048,20.47346h53.741s3.60893-13.277,7.0534-26.68988c-2.30341.26824-4.6069.48285-6.91745.58662" />
      <path className="bagh__body"
        d="M431.6949,205.06831a70.33958,70.33958,0,0,1-16.56407.58657q3.93442,9.829,7.94044,19.60788,6.43837-1.43065,12.161-3.31924a145.39989,145.39989,0,0,0-3.52669-16.88241" />
      <path className="bagh__body"
        d="M465.53118,118.192a32.54857,32.54857,0,0,0-25.97455-.38627,30.31541,30.31541,0,0,0-7.15355,4.62834,5.56916,5.56916,0,0,0,5.87667,9.2996,28.43521,28.43521,0,0,1,17.37951-1.25186,50.50753,50.50753,0,0,1,9.86834-12.28624" />
      <path className="bagh__body"
        d="M466.72229,135.86132a25.75266,25.75266,0,0,1,9.6573,18.59919,55.31824,55.31824,0,0,1,11.553,2.0066v-.32906a40.67861,40.67861,0,0,0-10.6373-29.841,45.33647,45.33647,0,0,0-10.57652,9.54638" />
      <path className="bagh__body"
        d="M474.22636,168.34554a55.254,55.254,0,0,1-7.06413,13.29488,98.26605,98.26605,0,0,1,6.71719,15.60191,61.56722,61.56722,0,0,0,12.161-25.4845,46.49918,46.49918,0,0,0-11.80335-3.41225" />
      <path className="bagh__body"
        d="M462.76633,206.76011a114.5566,114.5566,0,0,0-4.05972-15.23705A50.30765,50.30765,0,0,1,442.84,201.92435a127.10089,127.10089,0,0,1,4.589,15.24419,81.90729,81.90729,0,0,0,15.49818-9.339c-.0644-.3577-.12161-.71533-.186-1.073" />
    </svg>
  )
};

export default styled(BaaghIcon)(({ theme }) => ({
  '& .bagh__body': {
    fill: alpha(theme.Colors.slogan, 0.33),
  },
}));