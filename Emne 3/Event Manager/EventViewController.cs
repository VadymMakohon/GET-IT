namespace MyApp.Controllers.Views
{
    [Authorize]
    public class EventViewController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EventViewController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var events = await _context.Events.ToListAsync();
            return View(events);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Event event)
        {
            if (ModelState.IsValid)
            {
                _context.Add(event);
        await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
    }
            return View(event);
}
    }
}
