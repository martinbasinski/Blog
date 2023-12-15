// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// app/javascript/application.js
document.addEventListener('turbo:load', () => {
    // Initialize all Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  
    // Initialize Bootstrap's alert for dismissible alerts
    document.querySelectorAll('.alert-dismissible').forEach(function(alert) {
      new bootstrap.Alert(alert);
    });
  });
  