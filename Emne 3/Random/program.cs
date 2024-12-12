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

    static void TwoCarRace()
    {
        Random random = new Random();
        int car1Distance = 0, car2Distance = 0;
        const int finishLine = 10000;

        while (car1Distance < finishLine && car2Distance < finishLine)
        {
            int car1Speed = random.Next(60, 201);
            int car2Speed = random.Next(60, 201);

            car1Distance += car1Speed;
            car2Distance += car2Speed;

            Console.WriteLine($"Bil 1: {car1Distance} meter (Hastighet: {car1Speed} m/s)");
            Console.WriteLine($"Bil 2: {car2Distance} meter (Hastighet: {car2Speed} m/s)\n");
        }

        if (car1Distance >= finishLine && car2Distance >= finishLine)
        {
            Console.WriteLine("Det ble uavgjort!");
        }
        else if (car1Distance >= finishLine)
        {
            Console.WriteLine("Bil 1 vant kappløpet!");
        }
        else
        {
            Console.WriteLine("Bil 2 vant kappløpet!");
        }
    }
}