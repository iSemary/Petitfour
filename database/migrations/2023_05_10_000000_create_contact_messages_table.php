<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactMessagesTable extends Migration {
    public function up() {
        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('subject')->nullable();
            $table->string('message', 5000)->nullable();
            $table->boolean('seen')->default(false);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('contact_messages');
    }
}
