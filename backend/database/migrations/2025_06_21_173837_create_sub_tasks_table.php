<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubtasksTable extends Migration
{
    public function up()
    {
        Schema::create('subtasks', function (Blueprint $table) {
            $table->id('idSubTask');
            $table->unsignedBigInteger('task_id'); // FK a Task
            $table->string('task');
            $table->boolean('checked')->default(false);
            $table->timestamps();

            $table->foreign('task_id')->references('idTask')->on('tasks')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('subtasks');
    }
}
