# Basic Docker container managemen
class docker_containers {
  
  # Check if containers are running
  exec { 'check_containers':
    command => 'docker ps --filter "name=prd-app" > /tmp/container_status.txt',
    path    => ['/usr/bin', '/bin'],
    creates => '/tmp/container_status.txt',
  }
  
  # Display container status
  exec { 'show_status':
    command => 'cat /tmp/container_status.txt',
    path    => ['/usr/bin', '/bin'],
    require => Exec['check_containers'],
  }
  
  # Restart services if needed (only when restart_services fact is true)
  if $facts['restart_services'] == 'true' {
    exec { 'restart_docker_compose':
      command => 'docker-compose -f /project/docker-compose.yml restart',
      path    => ['/usr/bin', '/bin'],
      require => Exec['show_status'],
    }
  }
}

# Apply the class
include docker_containers