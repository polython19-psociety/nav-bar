import { css } from 'lit-element';

export default css`
@import url("https://fonts.googleapis.com/css?family=Lato");
:host {
  display: block;
  box-sizing: border-box;
  font-family: 'Roboto', 'Noto', sans-serif; }

:host([hidden]),
[hidden] {
  display: none !important; }

app-header {
  background-color: #ffc845;
  color: white;
  right: 0px !important;
  --app-header-background-front-layer: {
    background-color: #ffea6f;
  }

  ; }

.iconItem {
  color: #666; }

app-header paper-icon-button {
  --paper-icon-button-ink-color: white; }

.mainHeader [main-title] {
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  margin: 0 0 0 50px; }

.mainHeader [condensed-title] {
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  margin-left: 30px; }

.mainHeader [condensed-title] i {
  font-style: normal;
  font-family: 'Lato', sans-serif;
  font-weight: 100; }

app-toolbar.tall {
  height: 148px; }

app-drawer-layout:not([narrow]) [drawer-toggle] {
  display: none; }
`;
