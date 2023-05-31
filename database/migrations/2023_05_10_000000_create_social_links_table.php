<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialLinksTable extends Migration {
    public function up() {
        Schema::create('social_links', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->string('type');
            $table->tinyInteger('priority')->default(0);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('social_links');
    }
}
