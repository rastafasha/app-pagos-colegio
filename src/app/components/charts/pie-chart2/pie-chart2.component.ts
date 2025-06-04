import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component {
  public chart: Chart;
  
    ngOnInit(){
      const data ={
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [{
          label: 'Series A',
          data: [10, 20, 30, 40, 50],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
          }]
      }
      this.chart = new Chart('pieChart', {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Doughnut Chart'
            }
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      } );
      }      
}
