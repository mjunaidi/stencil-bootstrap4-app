import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'bs-card-columns',
  styleUrl: 'bs-card-columns.css'
})
export class CardColumns {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div class="card-columns">
      </div>
    );
  }
}
