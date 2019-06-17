import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { graphic } from 'echarts';


@Component({
  selector: 'echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer') chartContainer: ElementRef;
   xAxisData = [];
   data1 = [];
   data2 = [];


  option ={
    backgroundColor: '#2c343c',
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        roseType: 'angle',
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          }
        },
        data:[
          {value:235, name:'视频广告',},
          {value:274, name:'联盟广告'},
          {value:310, name:'邮件营销'},
          {value:335, name:'直接访问'},
          {value:400, name:'搜索引擎'}
        ],
        itemStyle: {
          // 设置扇形的颜色
          color: '#c23531',
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
      }
    ]
  };
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.xAxisData.push('category' + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
  }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
