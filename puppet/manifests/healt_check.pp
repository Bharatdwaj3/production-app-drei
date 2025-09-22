# Health check manifest
class app_health_check {
  
  # Check backend health
  exec { 'check_backend':
    command => 'curl -f http://localhost:4004/health || echo "Backend unhealthy"',
    path    => ['/usr/bin', '/bin'],
    onlyif  => 'which curl',
  }
  
  # Check frontend accessibility
  exec { 'check_frontend':
    command => 'curl -f http://localhost:5173 || echo "Frontend unhealthy"',
    path    => ['/usr/bin', '/bin'],
    onlyif  => 'which curl',
  }
  
  # Install curl if not present
  package { 'curl':
    ensure => installed,
    before => [Exec['check_backend'], Exec['check_frontend']],
  }
}

include app_health_check
