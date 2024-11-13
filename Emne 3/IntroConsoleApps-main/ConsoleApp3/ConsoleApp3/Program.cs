namespace ConsoleApp3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var name = MyConsole.Ask("Hva heter du? ");
            Console.WriteLine($"Hei, {name}!");

            var place = MyConsole.Ask("Hvor bor du? ");
            Console.WriteLine($"{place}!");
        }

        static void Main2(string[] args)
        {
            Console.WriteLine($"Du har angitt {args.Length}");
            foreach (var arg in args)
            {
                Console.WriteLine(arg);
            }
        }

        /*
             function main(args) {
                console.log("Hello, World!");
             }
         */
        /*
         function getNumber() {
            return 7;
         }
         */
        static int GetNumber()
        {
            return 7;
        }
    }
}
