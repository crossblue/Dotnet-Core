using System;
using System.Collections.Generic;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            var p = new Program();
            p.Test();
            string full = p.FullName("Kenneth", "Judd");
            Console.WriteLine(full);

            p.Exc1();
            p.OddNum();

        }


        void Exc1(){
           var numbers = new List<int>();
           // 10 20 .. 1000

           for(int i = 1; i < 101; i++){

               numbers.Add(i * 10);
           }
           Console.WriteLine(numbers);

           var sum = 0;
           foreach(int num in numbers){
               if(num > 40) {
                   sum += num;
               }
               
           }
           System.Console.WriteLine("Total: " + sum);

           NoReturns();

        }

        string FullName(string first, string last){
           return first + " " + last;
        }

         void NoReturns(){
             System.Console.WriteLine("test");

            // Variables types
             string name = "Kenneth";
             int age = 36;
             bool ok =  true;
             float f = 123.23f;
             decimal d = 123.123m;

             //string[] names = new string[100];
            // string[][] cube = new string[99][];

            

            List<string> list = new List<string>();
            list.Add("asdasd");

            System.Console.WriteLine("From array: " + name[0]);
            System.Console.WriteLine("From list: " + list[0]);

         }


        int Test() {
           


        Console.WriteLine("First Method");
        return 1;

        }

        void OddNum(){
            
        var numOddCount = new List<int>();

         for(int i = 0; i < 101; i++){

               numOddCount.Add(i);
           }
           Console.WriteLine(numOddCount);

           var Onum = 0;
           foreach(int num in numOddCount){
               if(num % 2 != 0) {
                   Console.WriteLine(num);
                   Onum =+ num;
               }
               
           }
           System.Console.WriteLine("The total of the Odd Numbers Are : " + Onum);

       

        }
    }
}
