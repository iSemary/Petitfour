<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserConfigsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('user_configs', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->integer('phone_number')->nullable();
            $table->tinyInteger('country_code')->nullable();
            $table->string('address')->nullable();
            $table->string('position')->nullable();
            $table->string('bio', 1024)->nullable();
            $table->string('slogan')->nullable();
            $table->string('home_image')->nullable();
            $table->string('theme_home_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('user_configs');
    }
}
