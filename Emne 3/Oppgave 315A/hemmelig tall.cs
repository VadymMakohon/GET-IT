using System;

class Program
{
    static void Main()
    {
        Random random = new Random();
        int hemmeligTall = random.Next(1, 101);

        int gjett = 0;
        int forsok = 0;

        Console.WriteLine("Velkommen til gjetteleken!");
        Console.WriteLine("Jeg har valgt et tilfeldig tall mellom 1 og 100.");

        while (gjett != hemmeligTall)
        {
            Console.Write("Gjett et tall: ");

            string input = Console.ReadLine();

            gjett = Convert.ToInt32(input);
            forsok++;

            if (gjett < hemmeligTall)
            {
                Console.WriteLine("For lavt! Prøv igjen.");
            }
            else if (gjett > hemmeligTall)
            {
                Console.WriteLine("For høyt! Prøv igjen.");
            }
            else
            {
                Console.WriteLine($"Gratulerer! Du gjettet riktig tall: {hemmeligTall}");
                Console.WriteLine($"Det tok deg {forsok} forsøk.");
            }
        }
    }
}
