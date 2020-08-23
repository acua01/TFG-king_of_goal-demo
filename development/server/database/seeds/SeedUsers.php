<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\User;
use Illuminate\Support\Facades\Hash;

class SeedUsers extends Seeder
{

  public function run()
  {
    $user = new User();
    $user->username = 'acua01';
    $user->email = 'ale.ap98@hotmail.com';
    $user->password = Hash::make('patata');
    $user->save();

    // create permissions
    Permission::create(['name' => 'insert player']);
    Permission::create(['name' => 'edit player']);
    Permission::create(['name' => 'delete player']);

    // this can be done as separate statements
    $role = Role::create(['name' => 'super-admin']);
    $role->givePermissionTo('insert player');
    $role->givePermissionTo('edit player');
    $role->givePermissionTo('delete player');

    $user->assignRole($role);
  }
}
