<?php

namespace App\Jobs;

use App\Helpers\SlackAlert;
use App\Models\ViewType;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SaveViewJob implements ShouldQueue {
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $data;
    /**
     * Create a new job instance.
     *
     * @param array $data
     * @return void
     */
    public function __construct($data) {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void {
        ViewType::create($this->data);
        // Send Slack Alert
        if (env("VIEWS_ALERTS")) (new SlackAlert)->send($this->data, 1);
    }
}
