<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'musicr');

// Project repository
set('repository', 'https://github.com/Schreglmann/mmp2a');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', false); 

// Shared files/dirs between deploys 
set('shared_files', ['.htaccess']);
//set('shared_dirs', ['wp-content/uploads']);

set('allow_anonymous_stats', false);

// Hosts

host('deployer@37.120.187.53')
    ->set('deploy_path', '/home/deployer/sites/{{application}}');    


// Composer
set('composer_action', false);

set('ssh_multiplexing', false);
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
