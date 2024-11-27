using System;

class Program
{
    static void Main()
    {
        Console.Write("Skriv inn det første tallet: ");
        double tall1 = Convert.ToDouble(Console.ReadLine());

        Console.Write("Skriv inn det andre tallet: ");
        double tall2 = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine($"Addisjon: {tall1} + {tall2} = {tall1 + tall2}");

        Console.WriteLine($"Subtraksjon: {tall1} - {tall2} = {tall1 - tall2}");

        Console.WriteLine($"Multiplikasjon: {tall1} * {tall2} = {tall1 * tall2}");

        if (tall2 != 0)
        {
            Console.WriteLine($"Divisjon: {tall1} / {tall2} = {tall1 / tall2}");
        }
        else
        {
            Console.WriteLine("Kan ikke dele med null.");
        }
    }
}