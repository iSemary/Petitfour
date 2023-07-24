<?php

namespace App\Console\Commands;

use App\Models\Blog;
use App\Models\Project;
use App\Models\Skill;
use App\Models\SystemConfig;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;

class GenerateSitemap extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates daily sitemap for the whole application';

    /**
     * Execute the console command.
     */
    public function handle() {
        $systemConfig = SystemConfig::where('id', 1);
        // Check if last generated sitemap didn't run in the current day, then run [to avoid attacks or infinity loops if you]
        if ($systemConfig->first()->sitemap_updated_at < Carbon::today()) {
            /** Collect all crawl pages and models */
            $pages = ['projects', 'skills', 'blogs', 'connect'];
            $pages[] = Blog::all();
            $pages[] = Project::all();
            $pages[] = Skill::all();

            SitemapGenerator::create(env('APP_URL'))
                ->getSitemap()
                ->add($pages)
                ->writeToFile(public_path() . '/sitemap.xml');
            $systemConfig->update(['sitemap_updated_at' => Carbon::now()]);
        }
    }
}
