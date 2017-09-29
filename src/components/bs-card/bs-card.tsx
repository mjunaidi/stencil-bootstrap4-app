import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'bs-card'
})
export class Card {

  @Prop() title: string;
  @Prop() text: string;
  @Prop() imgSrc: string;

  render() {
    return (
      <div class="card">
        <img class="card-img-top" src={this.imgSrc} alt="Card image cap"/>
        <div class="card-body">
          <h4 class="card-title">{this.title}</h4>
          <p class="card-text">{this.text}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}
