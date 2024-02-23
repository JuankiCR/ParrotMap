const loadMap = () => {
  svg = [
    {
      "type": "path",
      "path": "m 56.837735,327.19133 25.862554,3.60967 -1.95308,13.75611 -25.852893,-3.61999 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Topografía y Fotogrametría",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 212.41507,327.86754 30.10257,4.83242 -1.93648,11.89833 -30.10265,-4.84269 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Telefonía, IA y Robótica",
      "facultad": "FIME" 
    },
    {
      "type": "path",
      "path": "m 215.20244,351.81346 24.03861,3.4988 -1.70454,11.59912 -24.04845,-3.509 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Centro de Computo",
      "facultad": "FIME"  
    },
    {
      "type": "path",
      "path": "m 171.7657,394.39722 1.85798,-7.7206 2.77627,-6.0437 -1.51289,-0.23591 1.49684,-9.19606 21.38609,3.42472 -1.60854,9.96657 -6.81359,-1.16425 0.35224,5.85798 -0.80339,7.94942 -1.5033,6.83547 -2.28406,6.72798 -13.26428,-2.01289 -0.49433,-6.66781 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Postgrado Ciencias Químicas",
      "facultad": "FCQ" 
    },
    {
      "type": "path",
      "path": "m 204.15131,372.47781 9.38941,1.42367 -0.40088,2.67126 7.73012,1.16819 0.20527,-1.3459 9.71144,1.4625 -4.09562,26.86699 -26.84074,-4.04408 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorios FIME",
      "facultad": "FIME"  
    },
    {
      "type": "path",
      "path": "m 126.38745,384.3018 22.94786,3.68092 -3.31061,20.51877 -22.93813,-3.68096 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Mecatrónica",
      "facultad": "FIME" 
    },
    {
      "type": "path",
      "path": "m 173.20357,410.67537 5.46583,0.83482 -1.18561,7.66468 -5.45608,-0.83491 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de ING. Química",
      "facultad": "FCQ" 
    },
    {
      "type": "path",
      "path": "m 284.27743,344.05159 -0.98369,5.83635 -1.98085,2.60001 -1.28213,3.5497 0.0303,4.39252 1.2002,4.4049 1.05154,-0.20229 -0.79039,-2.95048 18.65201,2.85858 0.8218,-5.27092 -18.65199,-2.84816 0.60141,-3.28832 2.01747,-2.94916 15.05181,2.50334 0.49673,-2.92857 -0.74292,-3.11496 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio D",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 248.59717,341.96706 22.02841,3.25599 -2.12539,14.19869 -22.02843,-3.25602 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Mecánica",
      "facultad": "FIME" 
    },
    {
      "type": "path",
      "path": "m 242.53339,379.06168 35.88841,5.35372 -3.46267,23.34649 -35.88841,-5.35376 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Canchas"
    },
    {
      "type": "path",
      "path": "m 282.7721,325.06427 16.3187,2.40232 -2.10635,14.12668 -16.32855,-2.41249 z",

      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Electrónica",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 257.40397,321.05125 16.31869,2.40232 -2.10638,14.12668 -16.32846,-2.40225 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Taller de Máquinas y Herramientas",
      "facultad": "FIME"  
    },
    {
      "type": "path",
      "path": "m 339.69865,245.07985 23.87065,3.19187 -3.20074,23.68948 -23.87061,-3.18161 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Alimentos",
      "facultad": "FCQ"
    },
    {
      "type": "path",
      "path": "m 402.60447,171.5287 31.12162,4.16831 -1.71636,12.69741 -31.13131,-4.15798 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Operaciones Unitarias",
      "facultad": "FCQ" 
    },
    {
      "type": "path",
      "path": "m 378.44002,193.3011 16.24802,2.064 -2.81332,21.89072 -16.25786,-2.07419 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Farmacia",
      "facultad": "FCQ"
    },
    {
      "type": "path",
      "path": "m 380.32427,221.99493 10.1492,1.32596 -0.93582,7.10874 -10.14911,-1.31571 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Baños",
      "facultad": "FCQ"
    },
    {
      "type": "path",
      "path": "m 304.13182,216.93591 26.13952,16.94983 -7.08245,10.774 -26.12976,-16.9499 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio A",
      "facultad": "FCQ"
    },
    {
      "type": "path",
      "path": "m 244.2062,225.17903 18.83589,2.66212 -0.344,2.4348 -1.20887,8.52696 -1.51587,10.67411 -18.93343,-2.66147 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Dirección FIME",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 278.05374,265.62021 8.42289,-0.17083 7.19132,2.21875 -4.14739,33.49755 -7.86634,0.29024 -7.5828,-2.43164 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Explanada FIME",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 322.78473,272.3635 21.62155,3.6487 -1.99638,11.68324 -21.61174,-3.6385 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio de Postgrado FIME",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 298.22989,250.80503 -20.83066,-2.88718 -1.92799,13.74973 20.83869,2.87706 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Baños FIME",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 267.76356,300.84823 45.6814,5.98758 -1.65023,12.39929 -45.6716,-5.97738 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio B",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 232.33219,292.06524 15.23673,2.45085 -1.9272,11.82642 -15.23675,-2.45082 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Auditorio",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 223.71596,308.08408 21.15916,3.04646 -1.70368,11.7223 -21.16886,-3.03614 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Electromagnetismo",
      "facultad": "FIME" 
    },
    {
      "type": "path",
      "path": "m 209.38267,299.47924 6.03199,0.93355 -2.56003,16.22353 -6.03198,-0.93354 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Cubiculos FIME",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 153.87567,300.9383 13.42404,1.14964 -0.0745,1.93005 1.33668,0.13446 0.90259,-3.44444 4.82783,1.63976 -0.51598,1.53279 2.22007,0.99057 0.20145,-0.48376 10.03169,4.08775 -0.71868,1.83182 3.11247,0.3173 0.15382,-1.73556 8.76039,0.69929 -0.0578,1.51937 3.6186,0.19059 -0.63018,10.45249 -4.82867,-0.34657 -0.43741,5.87368 -8.8001,-0.80166 0.55588,-7.0753 -5.0544,-0.56057 -3.0166,6.538 -8.4777,-3.54421 2.8881,-6.79368 -3.29684,-1.60924 -3.31579,-0.11075 -0.73168,7.03545 -9.09343,-0.92283 0.76417,-6.56354 -4.79089,-0.52131 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Postgrado Arquitectura",
      "facultad": "FAYD" 
    },
    {
      "type": "path",
      "path": "m 197.48599,276.5504 30.9107,4.68319 -1.76381,11.48665 -30.91064,-4.67294 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio C",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 164.13228,249.7766 -0.83676,0.26222 -0.71801,0.50779 -0.52164,0.70153 -0.27696,0.83329 0.006,0.87231 -1.39136,11.76132 0.27589,3.27207 1.20843,2.7422 2.01401,2.23398 2.60391,1.50102 2.94896,0.63651 10.14911,1.31594 0.94536,-0.0475 0.87512,-0.35499 0.69762,-0.63089 0.45252,-0.82419 0.14001,-0.92476 1.4384,-12.02833 -0.39292,-3.25082 -1.4826,-2.9353 -2.39456,-2.26215 -3.02199,-1.32374 -11.84042,-2.03286 v 0 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Servicios Estudiantiles",
    },
    {
      "type": "path",
      "path": "m 95.306814,266.83505 -1.9492,12.90409 34.110836,5.01042 -1.2143,7.73677 10.83396,1.6703 1.21452,-7.73679 1.9297,-12.88351 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Materiales",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 66.0604,261.71929 15.977577,2.43564 -3.426481,22.11039 -15.977595,-2.43564 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Geomática y Medio Ambiente",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 47.567069,273.45416 8.394742,1.41004 -0.937134,5.51789 -8.404493,-1.40998 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Topografía",
      "facultad": "FIC"
    },
    {
      "type": "path",
      "path": "m 93.131894,292.31341 14.688976,2.19814 -2.49958,16.52073 -14.698736,-2.19807 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Hidráulica",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 55.418608,288.05641 8.26779,1.38013 0.253014,-1.48994 5.739611,0.95615 -0.32785,1.95231 6.93047,1.15324 -1.124364,6.64815 -1.288506,-0.21697 -0.92759,5.48706 1.961998,0.32523 -0.824355,4.9013 -11.967281,-1.99107 1.7333,-10.26505 -9.644106,-1.60675 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Experimentación",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 43.272404,213.11425 3.70815,0.45693 -0.181972,-0.94299 1.89311,0.23332 0.277355,-2.20853 5.406122,0.67106 -0.258897,2.05445 2.781097,0.34014 -0.184913,1.46892 3.415382,0.41789 -0.795068,6.32773 -2.761594,-0.34026 -0.489812,3.92398 -9.943708,-1.22493 0.582314,-4.65333 -4.196053,-0.51517 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Ingeniería Sanitaria y Química",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 66.356949,215.43954 31.290631,4.66028 -1.809457,11.94878 -31.280906,-4.66037 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Baños | Salones",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 83.38431,238.71295 31.29068,4.66026 -1.80938,11.95903 -31.281023,-4.67058 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Salones",
      "facultad": "FIC"
    },
    {
      "type": "path",
      "path": "m 55.913675,236.60253 20.836663,2.95651 -1.702798,11.86594 -20.836672,-2.95652 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Aulas Multimedia",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 129.14505,246.35285 20.83668,2.95642 -1.7125,11.86601 -20.82695,-2.95649 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Archivo Administrativo",
      "facultad": "FIC"
    },
    {
      "type": "path",
      "path": "m 117.57441,222.61093 31.28091,4.66026 -1.80935,11.95905 -31.28101,-4.67052 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Archivo Escolar",
      "facultad": "FIC"
    },
    {
      "type": "path",
      "path": "m 214.01948,191.05539 18.41526,12.39479 -16.70007,24.36725 -18.31778,-12.39545 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Biblioteca",
    },
    {
      "type": "path",
      "path": "m 102.15423,186.33303 29.47886,4.91898 -2.04272,12.05302 -29.47895,-4.92925 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Dirección FIC",
      "facultad": "FIC" 
    },
    {
      "type": "path",
      "path": "m 79.554467,106.92621 29.070033,3.61838 -1.61835,12.79933 -29.070121,-3.62865 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio A",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 116.77222,116.99825 3.06227,-4.14693 24.97533,3.65669 1.5409,5.73694 -0.18785,5.2972 -2.36711,5.98958 -2.51643,4.12265 -25.11481,-4.0868 -0.78251,-4.62344 -0.12104,-6.27011 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Explanada FAYD",
      "facultad": "FAYD" 
    },
    {
      "type": "path",
      "path": "m 114.29066,136.64136 2.05899,0.25272 24.79032,3.68875 2.7038,0.44329 -2.12897,12.26914 -29.47879,-4.91896 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Dirección FAYD",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 156.10505,134.39905 30.28957,3.72276 -1.45069,11.64868 -30.2896,-3.72276 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Auditorio",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 120.66109,97.838096 39.90492,5.422054 -1.75544,12.70791 -2.94725,-0.40053 -12.15015,-1.66131 -24.79786,-3.37055 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio B",
      "facultad": "FAYD" 
    },
    {
      "type": "path",
      "path": "m 187.11642,97.022115 3.93273,0.506665 18.32674,2.36805 -1.50953,11.59778 -3.00568,-0.38989 -14.54032,-1.87064 -0.60504,-0.0779 -4.11819,-0.53619 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Centro de Computo ",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 229.45717,88.017438 24.22779,2.707171 -1.99446,17.636021 -24.22776,-2.69693 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Espectrometría y Masas",
      "facultad": "FIC"
    },
    {
      "type": "path",
      "path": "m 234.73681,136.94792 44.62246,30.70921 -8.27413,11.87011 -44.61273,-30.7093 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Bachillerato 18",
      "facultad": "BACHI18" 
    },
    {
      "type": "path",
      "path": "m 284.32642,80.475937 -10.28869,14.247995 -0.16039,-0.106398 -10.18747,14.107986 -0.0616,-0.041 -10.42306,14.43438 0.0737,0.049 -10.34545,14.32666 56.26617,37.34304 10.43542,-14.43416 -0.0822,-0.0544 10.11402,-13.98943 0.0534,0.0353 2.91362,-4.03039 29.75861,2.43207 0.70415,-4.57091 32.17395,20.06591 7.3653,-9.57328 -37.54911,-23.41298 -0.015,0.0885 -0.36907,-0.24491 -1.79469,-1.19089 -53.82112,-35.712417 -0.0123,0.01711 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Estacionamiento Norte",
    },
    {
      "type": "path",
      "path": "m 364.61995,170.01614 28.26772,3.18208 -1.64573,14.45197 -28.26772,-3.17183 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Cubículos",
      "facultad": "FCQ" 
    },
    {
      "type": "path",
      "path": "m 327.45301,189.87503 38.02155,5.14719 -2.97053,21.71733 -38.03131,-5.13686 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Multidisciplinario",
      "facultad":"FCQ"
    },
    {
      "type": "path",
      "path": "m 327.57987,157.29806 25.27717,3.58248 -3.06132,21.27662 -25.27723,-3.58248 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Análisis Clínicos",
      "facultad": "FCQ"
    },
    {
      "type": "path",
      "path": "m 198.56873,82.266719 22.08197,2.588546 -1.4099,11.904994 -22.09166,-2.578218 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edifico D",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 171.85415,78.057568 17.64128,1.941715 -1.30451,11.63742 -17.63155,-1.941784 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio C",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 113.93583,77.542017 35.17006,4.541163 -1.69511,12.974338 -35.17015,-4.551425 z",
      "transform": "t-42.449944,-5.8734922",
      "name": " Taller de Maquetas e Iluminación",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 141.17117,59.630015 23.87859,2.976546 -1.58099,12.552761 -23.88843,-2.986744 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Taller de Nuevas Tecnologías y Fotografía ",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 183.20596,54.353168 30.956,4.241557 -1.65337,11.947724 -17.80065,-2.43324 -13.16504,-1.797992 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Taller de Madera",
      "facultad": "FAYD" 
    },
    {
      "type": "path",
      "path": "m 158.00361,20.482589 1.03838,0.711305 26.0956,17.72008 -13.86238,20.160247 -27.12425,-18.431473 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Antigua Facultad",
      "facultad": "FAYD" 
    },
    {
      "type": "path",
      "path": "m 92.948088,75.27425 15.026702,1.713428 -1.32533,11.452813 -2.22473,-0.251573 -12.801989,-1.461861 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Cubículos",
      "facultad": "FAYD" 
    },
    {
      "type": "path",
      "path": "m 113.49285,5.9474642 6.6531,3.3720188 -3.90619,7.611496 5.24426,2.663258 -6.92742,13.472131 -5.41056,-2.744225 -1.82738,3.656064 0.93021,0.578625 -1.77064,3.399089 -4.07024,7.858942 -1.35023,-0.688643 -2.876684,5.61332 1.389364,0.708896 -9.399947,18.312907 -7.494611,-3.807581 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Laboratorio de Metalúrgica",
      "facultad": "FAYD"
    },
    {
      "type": "path",
      "path": "m 115.43623,417.96029 -6.29775,29.02934 0.0655,0.19028 22.62042,19.89232 60.97144,32.57665 3.46215,1.84994 30.75163,16.43041 8.55924,-12.42126 0.96355,-1.39851 18.65461,-27.07213 2.74914,-23.02309 14.2831,-20.06418 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Estacionamiento Sur"
    },
    {
      "type": "path",
      "path": "m 71.316289,161.97177 c 0,6.16788 -5.000053,11.16793 -11.16793,11.16793 -6.167875,0 -11.167928,-5.00005 -11.167928,-11.16793 0,-6.16787 5.000053,-11.16793 11.167928,-11.16793 1.776531,0 3.45618,0.41481 4.94737,1.15286 1.727433,0.85497 3.201965,2.14371 4.281249,3.72386 1.22371,1.79161 1.939311,3.95784 1.939311,6.29121 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Monumento Entrada"
    },
    {
      "type": "path",
      "path": "m 65.69211,131.43392 -3.744322,9.36133 -0.235787,0.16364 a 16.571749,24.404384 14.876581 0 1 3.394317,0.68875 16.571749,24.404384 14.876581 0 1 7.999222,29.25191 16.571749,24.404384 14.876581 0 1 -22.968909,17.12196 16.571749,24.404384 14.876581 0 1 -3.243261,-2.01032 l -0.0105,0.10012 -1.579256,9.84072 -0.0022,0.0144 a 23.16768,34.117883 14.876581 0 0 1.851244,0.9564 23.16768,34.117883 14.876581 0 0 32.110919,-23.9368 23.16768,34.117883 14.876581 0 0 -11.183324,-40.89491 23.16768,34.117883 14.876581 0 0 -2.388061,-0.6571 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Entrada"
    },
    {
      "type": "path",
      "path": "m 320.17802,253.93137 -20.83067,-2.88719 -1.92798,13.74973 20.83869,2.87706 z",
      "transform": "t-42.449944,-5.8734922",
      "name": "Edificio A",
      "facultad": "FIME"
    },
    {
      "type": "path",
      "path": "m 184.06318,185.81676 19.20423,3.05368 8.68601,-17.16845 -13.43618,-13.70762 -17.50775,8.82173 z",
      "transform": "t-42.449944,-5.8734922",
      "name":"Fuente Ornamental"
    }
  ]

  var paper = Raphael("paper", 435, 525);

  var PUBLIC = {
    fill: "#a6c7b7",
    stroke: "#000000",
    "stroke-width": 0.147949,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-miterlimit": 10
  };

  var hoverPUBLIC = {
    fill: "#89b9a2",
    stroke: "#000000",
    "stroke-width": 0.147949,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-miterlimit": 10
  };

  var FIME = {
    fill: "#6cb3d9",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var hoverFIME = {
    fill: "#0daaff",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var FIC = {
    fill: "#723500",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var hoverFIC = {
    fill: "#86b18b",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var FAYD = {
    fill: "#d66464",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var hoverFAYD = {
    fill: "#8a0f0f",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var FCQ = {
    fill: "#ebcd8d",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var hoverFCQ = {
    fill: "#eebd52",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var BACHI18 = {
    fill: "#e59e9e",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  var hoverBACHI18 = {
    fill: "#d4ab70",
    stroke: "#040708",
    "stroke-width": 1,
    "stroke-linejoin": "round"
  };

  Raphael.el.FIME = function () {this.attr(FIME)}
  Raphael.el.hoverFIME = function () {this.attr(hoverFIME)}
  Raphael.el.FIC = function () {this.attr(FIC)}
  Raphael.el.hoverFIC = function () {this.attr(hoverFIC)}
  Raphael.el.FAYD = function () {this.attr(FAYD)}
  Raphael.el.hoverFAYD = function () {this.attr(hoverFAYD)}
  Raphael.el.FCQ = function () {this.attr(FCQ)}
  Raphael.el.hoverFCQ = function () {this.attr(hoverFCQ)}
  Raphael.el.BACHI18 = function () {this.attr(BACHI18)}
  Raphael.el.hoverBACHI18 = function () {this.attr(hoverBACHI18)}
  Raphael.el.PUBLIC = function () {this.attr(PUBLIC)}
  Raphael.el.hoverPUBLIC = function () {this.attr(hoverPUBLIC)}
  

  var coqui = {};

  for (var i = 0; i < svg.length; i++) {
    switch (svg[i].facultad) {
      case "FIME":
        coqui[i] = paper.path(svg[i].path).attr(FIME);
      break;
      case "FIC":
        coqui[i] = paper.path(svg[i].path).attr(FIC);
      break;
      case "FAYD":
        coqui[i] = paper.path(svg[i].path).attr(FAYD);
      break;
      case "FCQ":
        coqui[i] = paper.path(svg[i].path).attr(FCQ);
      break;
      case "BACHI18":
        coqui[i] = paper.path(svg[i].path).attr(BACHI18);
      break;
      default:
        coqui[i] = paper.path(svg[i].path).attr(PUBLIC);
    }
  }

  for (var building in coqui) {
    coqui[building].color = Raphael.getColor();
    (function (bd, building) {
      bd[0].style.cursor = "pointer";

      bd[0].onmouseover = function () {
        switch (svg[building].facultad) {
          case "FIME":
            bd.hoverFIME();
          break;
          case "FIC":
            bd.hoverFIC();
          break;
          case "FAYD":
            bd.hoverFAYD();
          break;
          case "FCQ":
            bd.hoverFCQ();
          break;
          case "BACHI18":
            bd.hoverBACHI18();
          break;
          default:
            bd.attr(hoverPUBLIC);
        }
        buildingLabelController(true, svg[building].name);
      };

      bd[0].onmouseout = function () {
        switch (svg[building].facultad) {
          case "FIME":
            bd.FIME();
          break;
          case "FIC":
            bd.FIC();
          break;
          case "FAYD":
            bd.FAYD();
          break;
          case "FCQ":
            bd.FCQ();
          break;
          case "BACHI18":
            bd.BACHI18();
          break;
          default:
            bd.attr(PUBLIC);
        }
        buildingLabelController(false);
      };

      bd[0].onclick = function() {
        // console.log(svg[building].name);
        document.getElementById("nombreZona").textContent = svg[building].name;
    };

    })(coqui[building], building);
  }
}


const buildingLabelController = (isShowing, label = "") => {
  mapLabel = document.getElementById("mapLabel");
  mapLabel.textContent = label;
  isShowing ? mapLabel.classList.add("active") : mapLabel.classList.remove("active");
  // etiqueta sigue el cursor
  document.onmousemove = function(e){
    mapLabel.style.left = e.pageX + 20 + 'px';
    mapLabel.style.top = e.pageY + 20 + 'px';
  }
}