//Main.js File

function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints

    // radius, height, segment, teta, position;

    let rightObject = [
        //OBJECT 1
        //selimut botol
        -2.19, 2.25, 0.8, 0.8, 0.8, //v
        -2.0, 2.0, 0.8, 0.8, 0.8, //w
        -1.86, -5.37, 0.8, 0.8, 0.8,//l1

        -2.0, 2.0, 0.8, 0.8, 0.8, //w
        -1.86, -5.37, 0.8, 0.8, 0.8,//l1
        -1.71,-5.67,0.8,0.8,0.8, //m1, 

        -1.71,-5.67,0.8,0.8,0.8, //m1
        -1.70, 1.79, 0.8, 0.8, 0.8, //z
        -2.0, 2.0, 0.8, 0.8, 0.8, //w

        -1.71,-5.67,0.8,0.8,0.8, //m1
        -1.70, 1.79, 0.8, 0.8, 0.8, //z
        -1.29, 1.59, 0.8, 0.8,0.8,//a1

        -1.71,-5.67,0.8,0.8,0.8, //m1
        -1.29, 1.59, 0.8, 0.8,0.8,//a1
        -1.37, -6.14 ,0.8, 0.8, 0.8,//ni

        -1.29, 1.59, 0.8, 0.8,0.8,//a1
        -1.37, -6.14 ,0.8, 0.8, 0.8,//ni
        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi

        -1.37, -6.14 ,0.8, 0.8, 0.8,//ni
        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi
        -1.06, -6.43 ,0.8, 0.8, 0.8,//o1

        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi
        -1.06, -6.43 ,0.8, 0.8, 0.8,//o1
        -0.57, -6.55 ,0.8, 0.8, 0.8,//p1
        
        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi
        -0.57, -6.55 ,0.8, 0.8, 0.8,//p1
        -0.07, 1.45,0.8, 0.8, 0.8,//c1

        -0.57, -6.55 ,0.8, 0.8, 0.8,//p1
        -0.07, 1.45,0.8, 0.8, 0.8,//c1
        -0.51, -6.58 ,0.8, 0.8, 0.8,//q1

        -0.07, 1.45,0.8, 0.8, 0.8,//c1
        -0.51, -6.58 ,0.8, 0.8, 0.8,//q1
        0.5, -6.5,0.8, 0.8, 0.8,//r1

        -0.07, 1.45,0.8, 0.8, 0.8,//c1
        0.5, -6.5,0.8, 0.8, 0.8,//r1
        0.56, 1.53, 0.8, 0.8, 0.8,//d1

        0.5, -6.5,0.8, 0.8, 0.8,//r1
        0.56, 1.53, 0.8, 0.8, 0.8,//d1
        1.13, 1.70, 0.8, 0.8, 0.8,//e1

        0.5, -6.5,0.8, 0.8, 0.8,//r1
        0.83, -6.29, 0.8, 0.8, 0.8,//s1
        1.13, 1.70, 0.8, 0.8, 0.8,//e1

        0.83, -6.29, 0.8, 0.8, 0.8,//s1
        1.13, 1.70, 0.8, 0.8, 0.8,//e1
        1.08, -6.03, 0.8, 0.8, 0.8,//t1

        1.13, 1.70, 0.8, 0.8, 0.8,//e1
        1.08, -6.03, 0.8, 0.8, 0.8,//t1
        1.56, 1.99, 0.8, 0.8, 0.8,//f1

        1.08, -6.03, 0.8, 0.8, 0.8,//t1
        1.56, 1.99, 0.8, 0.8, 0.8,//f1
        1.30, -5.6, 0.8, 0.8, 0.8,//u1
        
        1.56, 1.99, 0.8, 0.8, 0.8,//f1
        1.30, -5.6, 0.8, 0.8, 0.8,//u1
        1.75, 2.32, 0.8, 0.8, 0.8,//g1

        //cyl
            //atas
            -2.13, 8.05, 0.6, 0.6, 0.6, //c
            -1.98, 7.71, 0.6, 0.6, 0.6, //d
            -0.03, 8.13, 0.6, 0.6, 0.6, //u
            
            -1.98, 7.71, 0.5, 0.5, 0.5, //d
            -1.46, 7.42, 0.5, 0.5, 0.5, //e
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -1.46, 7.42, 0.5, 0.5, 0.5, //e
            -0.54, 7.30, 0.5, 0.5, 0.5, //f
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -0.54, 7.30, 0.5, 0.5, 0.5, //f
            -0.12, 7.23, 0.5, 0.5, 0.5, //g
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -0.12, 7.23, 0.5, 0.5, 0.5, //g
            0.40, 7.25, 0.5, 0.5, 0.5, //h
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            0.40, 7.25, 0.5, 0.5, 0.5, //h
            0.90, 7.29, 0.5, 0.5, 0.5, //i
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            0.90, 7.29, 0.6, 0.6, 0.6, //i
            1.41, 7.42, 0.6, 0.6, 0.6,//j
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            1.41, 7.42, 0.6, 0.6, 0.6,//j
            1.80, 7.70, 0.6, 0.6, 0.6,//k
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            1.80, 7.70, 0.6, 0.6, 0.6,//k
            1.90, 8.0, 0.6, 0.6, 0.6,//l
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            1.90, 8.0, 0.6, 0.6, 0.6,//l
            1.61, 8.29, 0.6, 0.6, 0.6, //m
            -0.03, 8.13, 0.6, 0.6, 0.6, //u
         
            1.61, 8.29, 0.6, 0.6, 0.6, //m
            1.18, 8.51, 0.6, 0.6, 0.6, //n
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            1.18, 8.51, 0.6, 0.6, 0.6, //n
            0.66, 8.65, 0.6,0.6,0.6,//o
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            0.66, 8.65, 0.6,0.6,0.6,//o
            0.19, 8.7, 0.6, 0.6, 0.6,//p
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            0.19, 8.7, 0.6, 0.6, 0.6,//p
            -0.35, 8.70, 0.6,0.6,0.6,//q
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            -0.35, 8.70, 0.6,0.6,0.6,//q
            -0.87,8.66,0.6,0.6,0.6,//r
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            -0.87,8.66,0.6,0.6,0.6,//r
            -1.35, 8.54, 0.6,0.6,0.6,//s
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            -1.35, 8.54, 0.6,0.6,0.6,//s
            -1.84, 8.32, 0.6, 0.6, 0.6,//t
            -0.03, 8.13, 0.6, 0.6, 0.6, //u

            -1.84, 8.32, 0.6, 0.6, 0.6,//t
            -2.13, 8.05, 0.6, 0.6, 0.6, //c
            -0.03, 8.13, 0.6, 0.6, 0.6, //u
        
        //selimut silinder
            -2.13, 8.05, 0.2, 0.2, 0.2, //c
            -2.19, 2.25, 0.2, 0.2, 0.2, //v
            -1.98, 7.71, 0.2, 0.2, 0.2, //d

            -2.19, 2.25, 0.2, 0.2, 0.2, //v
            -1.98, 7.71, 0.2, 0.2, 0.2, //d
            -2.0, 2.0, 0.2, 0.2, 0.2, //w
            
            -1.98, 7.71, 0.2, 0.2, 0.2, //d
            -2.0, 2.0, 0.2, 0.2, 0.2, //w
            -1.46, 7.42, 0.2, 0.2, 0.2,//e

            -2.0, 2.0, 0.2, 0.2, 0.2, //w
            -1.46, 7.42, 0.2, 0.2, 0.2,//e
            -1.70, 1.79, 0.2, 0.2, 0.2,//z

            -1.46, 7.42, 0.2, 0.2, 0.2,//e
            -1.70, 1.79, 0.2, 0.2, 0.2,//z
            -0.74, 7.30, 0.2, 0.2, 0.2, //f

            -1.70, 1.79, 0.2, 0.2, 0.2,//z
            -0.74, 7.30, 0.2, 0.2, 0.2, //f
            -1.29, 1.59, 0.2, 0.2,0.2,//a1

            -0.74, 7.30, 0.2, 0.2, 0.2, //f
            -1.29, 1.59, 0.2, 0.2,0.2,//a1
            -0.12, 7.30, 0.2,0.2, 0.2, //g

            -1.29, 1.59, 0.2, 0.2,0.2,//a1
            -0.12, 7.30, 0.2,0.2, 0.2, //g
            -0.73, 1.50, 0.2, 0.2, 0.2, //b1

            -0.12, 7.30, 0.2,0.2, 0.2, //g
            -0.73, 1.50, 0.2, 0.2, 0.2, //b1
            -0.07, 1.45, 0.2, 0.2,0.2, //c1

            -0.12, 7.30, 0.2,0.2, 0.2, //g
            -0.07, 1.45, 0.2, 0.2,0.2, //c1
            0.40, 7.25, 0.2, 0.2, 0.2, //h

            -0.07, 1.45, 0.2, 0.2,0.2, //c1
            0.26, 1.53, 0.2, 0.2, 0.2, //d1
            0.40, 7.25, 0.2, 0.2, 0.2, //h

            0.26, 1.53, 0.2, 0.2, 0.2, //d1
            0.40, 7.25, 0.2, 0.2, 0.2, //h
            0.90, 7.29, 0.2, 0.2, 0.2, //i

            0.40, 7.25, 0.2, 0.2, 0.2, //h
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            0.26, 1.53, 0.2, 0.2, 0.2, //d1
         
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            0.26, 1.53, 0.2, 0.2, 0.2, //d1
            1.13, 1.70, 0.2, 0.2, 0.2, //e1

            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.13, 1.70, 0.2, 0.2, 0.2, //e1
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            
            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            1.80, 7.70, 0.2, 0.2, 0.2,//k
            
            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.90, 8.0, 0.2, 0.2, 0.2,//l
            1.80, 7.70, 0.2, 0.2, 0.2,//k

            1.75, 2.32, 0.2,0.2,0.2, //g1
            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.80, 7.70, 0.2, 0.2, 0.2,//k

            //text
            -2, -4, 0.2,0.2,0.2, //h3
            -1.26, -4.80, 0.2,0.2,0.2,//g3
            -2.20, 0.88, 0.2,0.2,0.2, //e3

            -1.26, -4.80, 0.2,0.2,0.2,//g3
            -2.20, 0.88, 0.2,0.2,0.2, //e3
            -1.26, 0.10, 0.2,0.2,0.2, //f3

    ];

       

    let leftObject = [
        //OBJECT 2 KIRI

        
        //selimut botol
        -2.19, 2.25, 0.8, 0.8, 0.8, //v
        -2.0, 2.0, 0.8, 0.8, 0.8, //w
        -1.86, -5.37, 0.8, 0.8, 0.8,//l1

        -2.0, 2.0, 0.8, 0.8, 0.8, //w
        -1.86, -5.37, 0.8, 0.8, 0.8,//l1
        -1.71,-5.67,0.8,0.8,0.8, //m1, 

        -1.71,-5.67,0.8,0.8,0.8, //m1
        -1.70, 1.79, 0.8, 0.8, 0.8, //z
        -2.0, 2.0, 0.8, 0.8, 0.8, //w

        -1.71,-5.67,0.8,0.8,0.8, //m1
        -1.70, 1.79, 0.8, 0.8, 0.8, //z
        -1.29, 1.59, 0.8, 0.8,0.8,//a1

        -1.71,-5.67,0.8,0.8,0.8, //m1
        -1.29, 1.59, 0.8, 0.8,0.8,//a1
        -1.37, -6.14 ,0.8, 0.8, 0.8,//ni

        -1.29, 1.59, 0.8, 0.8,0.8,//a1
        -1.37, -6.14 ,0.8, 0.8, 0.8,//ni
        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi

        -1.37, -6.14 ,0.8, 0.8, 0.8,//ni
        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi
        -1.06, -6.43 ,0.8, 0.8, 0.8,//o1

        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi
        -1.06, -6.43 ,0.8, 0.8, 0.8,//o1
        -0.57, -6.55 ,0.8, 0.8, 0.8,//p1
        
        -0.73, 1.50 ,0.8, 0.8, 0.8,//bi
        -0.57, -6.55 ,0.8, 0.8, 0.8,//p1
        -0.07, 1.45,0.8, 0.8, 0.8,//c1

        -0.57, -6.55 ,0.8, 0.8, 0.8,//p1
        -0.07, 1.45,0.8, 0.8, 0.8,//c1
        -0.51, -6.58 ,0.8, 0.8, 0.8,//q1

        -0.07, 1.45,0.8, 0.8, 0.8,//c1
        -0.51, -6.58 ,0.8, 0.8, 0.8,//q1
        0.5, -6.5,0.8, 0.8, 0.8,//r1

        -0.07, 1.45,0.8, 0.8, 0.8,//c1
        0.5, -6.5,0.8, 0.8, 0.8,//r1
        0.56, 1.53, 0.8, 0.8, 0.8,//d1

        0.5, -6.5,0.8, 0.8, 0.8,//r1
        0.56, 1.53, 0.8, 0.8, 0.8,//d1
        1.13, 1.70, 0.8, 0.8, 0.8,//e1

        0.5, -6.5,0.8, 0.8, 0.8,//r1
        0.83, -6.29, 0.8, 0.8, 0.8,//s1
        1.13, 1.70, 0.8, 0.8, 0.8,//e1

        0.83, -6.29, 0.8, 0.8, 0.8,//s1
        1.13, 1.70, 0.8, 0.8, 0.8,//e1
        1.08, -6.03, 0.8, 0.8, 0.8,//t1

        1.13, 1.70, 0.8, 0.8, 0.8,//e1
        1.08, -6.03, 0.8, 0.8, 0.8,//t1
        1.56, 1.99, 0.8, 0.8, 0.8,//f1

        1.08, -6.03, 0.8, 0.8, 0.8,//t1
        1.56, 1.99, 0.8, 0.8, 0.8,//f1
        1.30, -5.6, 0.8, 0.8, 0.8,//u1
        
        1.56, 1.99, 0.8, 0.8, 0.8,//f1
        1.30, -5.6, 0.8, 0.8, 0.8,//u1
        1.75, 2.32, 0.8, 0.8, 0.8,//g1

        //silinder
            //roof
            -2.13, 8.05, 0.6, 0.6, 0.6, //c
            -1.98, 7.71, 0.6, 0.6, 0.6, //d
            -0.03, 8.13, 0.6, 0.6, 0.6, //u
            
            -1.98, 7.71, 0.5, 0.5, 0.5, //d
            -1.46, 7.42, 0.5, 0.5, 0.5, //e
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -1.46, 7.42, 0.5, 0.5, 0.5, //e
            -0.54, 7.30, 0.5, 0.5, 0.5, //f
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -0.54, 7.30, 0.5, 0.5, 0.5, //f
            -0.12, 7.23, 0.5, 0.5, 0.5, //g
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -0.12, 7.23, 0.5, 0.5, 0.5, //g
            0.40, 7.25, 0.5, 0.5, 0.5, //h
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            0.40, 7.25, 0.5, 0.5, 0.5, //h
            0.90, 7.29, 0.5, 0.5, 0.5, //i
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            0.90, 7.29, 0.5, 0.5, 0.5, //i
            1.41, 7.42, 0.5, 0.5, 0.5,//j
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            1.41, 7.42, 0.5, 0.5, 0.5,//j
            1.80, 7.70, 0.5, 0.5, 0.5,//k
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            1.80, 7.70, 0.5, 0.5, 0.5,//k
            1.90, 8.0, 0.5, 0.5, 0.5,//l
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            1.90, 8.0, 0.5, 0.5, 0.5,//l
            1.61, 8.29, 0.5, 0.5, 0.5, //m
            -0.03, 8.13, 0.5, 0.5, 0.5, //u
         
            1.61, 8.29, 0.5, 0.5, 0.5, //m
            1.18, 8.51, 0.5, 0.5, 0.5, //n
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            1.18, 8.51, 0.5, 0.5, 0.5, //n
            0.66, 8.65, 0.5,0.5,0.5,//o
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            0.66, 8.65, 0.5,0.5,0.5,//o
            0.19, 8.7, 0.5, 0.5, 0.5,//p
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            0.19, 8.7, 0.5, 0.5, 0.5,//p
            -0.35, 8.70, 0.5,0.5,0.5,//q
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -0.35, 8.70, 0.5,0.5,0.5,//q
            -0.87,8.66,0.5,0.5,0.5,//r
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -0.87,8.66,0.5,0.5,0.5,//r
            -1.35, 8.54, 0.5,0.5,0.5,//s
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -1.35, 8.54, 0.5,0.5,0.5,//s
            -1.84, 8.32, 0.5, 0.5, 0.5,//t
            -0.03, 8.13, 0.5, 0.5, 0.5, //u

            -1.84, 8.32, 0.5, 0.5, 0.5,//t
            -2.13, 8.05, 0.5, 0.5, 0.5, //c
            -0.03, 8.13, 0.5, 0.5, 0.5, //u
        
        //selimut silinder
            -2.13, 8.05, 0.2, 0.2, 0.2, //c
            -2.19, 2.25, 0.2, 0.2, 0.2, //v
            -1.98, 7.71, 0.2, 0.2, 0.2, //d

            -2.19, 2.25, 0.2, 0.2, 0.2, //v
            -1.98, 7.71, 0.2, 0.2, 0.2, //d
            -2.0, 2.0, 0.2, 0.2, 0.2, //w
            
            -1.98, 7.71, 0.2, 0.2, 0.2, //d
            -2.0, 2.0, 0.2, 0.2, 0.2, //w
            -1.46, 7.42, 0.2, 0.2, 0.2,//e

            -2.0, 2.0, 0.2, 0.2, 0.2, //w
            -1.46, 7.42, 0.2, 0.2, 0.2,//e
            -1.70, 1.79, 0.2, 0.2, 0.2,//z

            -1.46, 7.42, 0.2, 0.2, 0.2,//e
            -1.70, 1.79, 0.2, 0.2, 0.2,//z
            -0.74, 7.30, 0.2, 0.2, 0.2, //f

            -1.70, 1.79, 0.2, 0.2, 0.2,//z
            -0.74, 7.30, 0.2, 0.2, 0.2, //f
            -1.29, 1.59, 0.2, 0.2,0.2,//a1

            -0.74, 7.30, 0.2, 0.2, 0.2, //f
            -1.29, 1.59, 0.2, 0.2,0.2,//a1
            -0.12, 7.30, 0.2,0.2, 0.2, //g

            -1.29, 1.59, 0.2, 0.2,0.2,//a1
            -0.12, 7.30, 0.2,0.2, 0.2, //g
            -0.73, 1.50, 0.2, 0.2, 0.2, //b1

            -0.12, 7.30, 0.2,0.2, 0.2, //g
            -0.73, 1.50, 0.2, 0.2, 0.2, //b1
            -0.07, 1.45, 0.2, 0.2,0.2, //c1

            -0.12, 7.30, 0.2,0.2, 0.2, //g
            -0.07, 1.45, 0.2, 0.2,0.2, //c1
            0.40, 7.25, 0.2, 0.2, 0.2, //h

            -0.07, 1.45, 0.2, 0.2,0.2, //c1
            0.26, 1.53, 0.2, 0.2, 0.2, //d1
            0.40, 7.25, 0.2, 0.2, 0.2, //h

            0.26, 1.53, 0.2, 0.2, 0.2, //d1
            0.40, 7.25, 0.2, 0.2, 0.2, //h
            0.90, 7.29, 0.2, 0.2, 0.2, //i

            0.40, 7.25, 0.2, 0.2, 0.2, //h
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            0.26, 1.53, 0.2, 0.2, 0.2, //d1
         
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            0.26, 1.53, 0.2, 0.2, 0.2, //d1
            1.13, 1.70, 0.2, 0.2, 0.2, //e1

            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.13, 1.70, 0.2, 0.2, 0.2, //e1
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            
            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.41, 7.42, 0.2, 0.2, 0.2, //j
            1.80, 7.70, 0.2, 0.2, 0.2,//k
            
            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.90, 8.0, 0.2, 0.2, 0.2,//l
            1.80, 7.70, 0.2, 0.2, 0.2,//k

            1.75, 2.32, 0.2,0.2,0.2, //g1
            1.56, 1.99, 0.2, 0.2, 0.2, //f1
            1.80, 7.70, 0.2, 0.2, 0.2,//k

            //text2
        -1.66, -2.58, 0.3, 0.3, 0.3, //h1
        -1.66, -3.10, 0.3, 0.3, 0.3, //i1
        -1.13, -2.85, 0.3, 0.3, 0.3, //c2

        -1.26, -3.33, 0.3, 0.3, 0.3, //j1
        -1.66, -3.10, 0.3, 0.3, 0.3, //i1
        -1.13, -2.85, 0.3, 0.3, 0.3, //c2

        -1.26, -3.33, 0.3, 0.3, 0.3, //j1
        -0.436, -3.01, 0.3, 0.3, 0.3, //b2
        -1.13, -2.85, 0.3, 0.3, 0.3, //c2


        -1.26, -3.33, 0.3, 0.3, 0.3, //j1
        -0.436, -3.01, 0.3, 0.3, 0.3, //b2
        -0.49, -3.56, 0.3, 0.3, 0.3, //k1

        -0.43, -3.01, 0.3, 0.3, 0.3, //b2
        -0.49, -3.56, 0.3, 0.3, 0.3, //k1
        0.36, -3.47, 0.3, 0.3, 0.3, //v1
        
        -0.43, -3.01, 0.3, 0.3, 0.3, //b2
        0.36, -3.47, 0.3, 0.3, 0.3, //v1
        -0.40, -3.10, 0.3, 0.3, 0.3, //a2

        1.29, -2.70, 0.3, 0.3, 0.3, //z2
        0.36, -3.47, 0.3, 0.3, 0.3, //v1
        -0.40, -3.10, 0.3, 0.3, 0.3, //a2

        1.29, -2.70, 0.3, 0.3, 0.3, //z2
        0.36, -3.47, 0.3, 0.3, 0.3, //v1
        1.15, -3.20, 0.3, 0.3, 0.3, //w1

            //text
        -1.56, -1.00, 0.1, 0.1, 0.0, //d2
        -1.13, -1.21, 0.1, 1.1, 0.0, //e2
        -0.13, -0.72, 0.1, 0.1, 0.1, //p2 

        -1.13, -1.21, 0.1, 0.1, 0.0, //e2
        -0.62, -1.40,  0.1, 1.1, 0.0, //f2
        -0.13, -0.72, 0.1, 0.1, 0.1, //p2 

        -0.62, -1.40,  0.1, 0.1, 0.0, //f2
        -0.02, -1.38,  0.1, 1.1, 0.0, //g2
        -0.13, -0.72, 0.1, 0.1, 0.1, //p2 

        -0.02, -1.38,  0.1, 0.1, 0.0, //g2
        0.53, -1.31,  0.1, 1.1, 0.0, //h2
        -0.13, -0.72, 0.1, 0.1, 0.1, //p2 

        0.53, -1.31,  0.1, 0.1, 0.0, //h2
        1, -1,  0.1, 1.1, 0.0, //i
        -0.13, -0.72, 0.1, 0.1, 0.1, //p2 

        1, -1,  0.1, 0.1, 0.0, //i
        1.16, -0.80, 0.1, 1.1, 0.0, //j
        -0.13, -0.72, 0.1, 0.1, 0.1, //p2 

        1.16, -0.80, 0.1, 0.1, 0.0, //j
        0.97, -0.50, 0.1, 1.1, 0.0, //k
        -0.13, -0.72, 0.1, 1.1, 0.1, //p2 

        0.97, -0.50, 0.1, 0.1, 0.0, //k
        0.58, -0.26, 0.1, 1.1, 0.0, //l
        -0.13, -0.72, 0.1, 1.1, 0.1, //p2 

        0.58, -0.26, 0.1, 0.1, 0.0, //l
        0.04, -0.15, 0.1, 1.1, 0.0, //m2
        -0.13, -0.72, 0.1, 1.1, 0.1, //p2 

        0.04, -0.15, 0.1, 0.1, 0.0, //m2
        -0.06, -0.17, 0.1, 1.1, 0.0, //o2
        -0.13, -0.72, 0.1, 1.1, 0.1, //p2 

        -0.06, -0.17, 0.1, 0.1, 0.0, //o2
        -1.11, -0.40, 0.1, 1.1, 0.0, //q2
        -0.13, -0.72, 0.1, 1.1, 0.1, //p2
        
        -1.11, -0.40, 0.1, 0.1, 0.0, //q2
        -1.42, -0.58, 0.1, 1.1, 0.0, //n2
        -0.13, -0.72, 0.1, 1.1, 0.1, //p2

        -1.42, -0.58, 0.1, 0.1, 0.0, //n2
        -1.56, -1.00, 0.1, 1.1, 0.0, //d2
        -0.13, -0.72, 0.1, 1.1, 0.1, //p2

    ];

    let vertices = [
        ...rightObject,
        ...leftObject
    ];

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform mat4 uMatrix;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = uMatrix * vec4(aPosition, 0.0, 20.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;

    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);

    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);

    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    // Apply some interaction using mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }

    document.addEventListener("click", onMouseClick, false);

    // var speed = [0, 1/600];
    // Create a uniform to animate the vertices
    // var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    // var change = [0, 0];

    var dy = 0;
    var speed = 0.0059;
    function render() {
        if(dy >= 0.55 || dy <= -0.55)
            speed = -speed;

        dy += speed;
        gl.useProgram(shaderProgram);

        const leftPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -0.25, 0.0, 0.0, 1.0,
        ]
            
        const rightPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.25, dy, 0.0, 1.0,
        ]
        

        gl.clearColor(0.1, 0.1, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const uMatrix = gl.getUniformLocation(shaderProgram, 'uMatrix');

        gl.uniformMatrix4fv(uMatrix, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, 0, rightObject.length/5);

        gl.uniformMatrix4fv(uMatrix, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, rightObject.length/5, leftObject.length/5);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}