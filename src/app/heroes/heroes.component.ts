import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
// 从 Angular 核心库中导入 Component 符号，并为组件类加上 @Component 装饰器
// @Component 装饰器函数 用于为该组件指定所需的元数据
@Component({
  // selector 组件的选择器（css元素选择器）
  // 用来在父组件的模板中匹配(引用) HTML 元素的名称，以识别出该组件
  selector: 'app-heroes',
  // templateUrl 组件模板文件的位置
  templateUrl: './heroes.component.html',
  // 组件私有css样式文件的位置
  // 可以用多种方式定义私有样式，或者内联在 @Component.styles 数组中，
  // 或者在 @Component.styleUrls 所指出的样式表文件中
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // selectedHero: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor(private heroService: HeroService) {
  }

  // ngOnInit 一个生命周期钩子， 初始逻辑
  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes()
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
