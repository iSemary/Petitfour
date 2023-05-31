<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSystemConfigsTable extends Migration {
    public function up() {
        Schema::create('system_configs', function (Blueprint $table) {
            $table->id();
            $table->string('primary_color')->nullable();
            $table->string('secondary_color')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('openai_api_token')->nullable();
            $table->string('google_analytics_id')->nullable();
            $table->string('logo')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('system_configs');
    }
}
