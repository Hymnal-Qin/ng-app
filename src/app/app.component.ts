import { Component } from '@angular/core';

// 组件及其模板共同定义视图。组件还可以包含视图层次结构，
// 它能让你定义任意复杂的屏幕区域，
// 可以将其作为一个整体进行创建、修改和销毁。
// 一个视图层次结构中可以混合使用由不同 NgModule 中的组件定义的视图。
// 这种情况很常见，特别是对一些 UI 库来说。

// 当你创建一个组件时，它直接与一个叫做宿主视图的视图关联起来。
// 宿主视图可以是视图层次结构的根，该视图层次结构可以包含一些内嵌视图，
// 这些内嵌视图又是其它组件的宿主视图。
// 这些组件可以位于相同的 NgModule 中，也可以从其它 NgModule 中导入。
// 树中的视图可以嵌套到任意深度。

// @Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。
// 组件及其模板(无论是直接内联在代码中还是引用的外部文件)，共同描述了一个视图。
@Component({
  // selector：是一个 CSS 选择器，它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例。
  // 比如，如果应用的 HTML 中包含 <app-hero-list></app-hero-list>，Angular 就会在这些标签中插入一个 HeroListComponent 实例的视图
  selector: 'app-root',
  // templateUrl：该组件的 HTML 模板文件相对于这个组件文件的地址。 另外，你还可以用 template 属性的值来提供内联的 HTML 模板。
  // 这个模板定义了该组件的宿主视图。
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers：当前组件所需的服务提供商的一个数组。在这个例子中，它告诉 Angular 该如何提供一个 HeroService 实例，以获取要显示的英雄列表。
  providers: []
})
export class AppComponent {
  title = 'My Tour of Heroes';
}
