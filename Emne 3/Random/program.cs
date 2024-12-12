using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Første del: Enkel bil som kjører 1000m\n");
        SingleCarRace();

        Console.WriteLine("\nAndre del: To biler som kjører om kapp\n");
        TwoCarRace();
    }

    static void SingleCarRace()
    {
        int distanceCovered = 0;
        int speed = 10; // Start-hastighet i m/s
        const int totalDistance = 1000;

        while (distanceCovered < totalDistance)
        {
            distanceCovered += speed;
            Console.WriteLine($"Bilen kjører {speed} m/s og har nå kjørt {distanceCovered} meter.");

            if (distanceCovered < 500)
                speed += 10; // Øk hastighet
            else if (speed > 10)
                speed -= 10; // Reduser hastighet
        }

        Console.WriteLine("Bilen er fremme og har parkert.");
    }

    