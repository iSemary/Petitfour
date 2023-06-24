<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThemeCounterTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('theme_counter', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('theme_type')->nullable();
            $table->string('device_type', 255)->nullable();
            $table->string('device_details', 1024)->nullable();
            $table->tinyInteger('view_type')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('theme_counter');
    }
}
