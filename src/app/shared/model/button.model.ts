export type ButtonVariant =
  | 'basic'
  | 'raised'
  | 'flat'
  | 'icon'
  | 'stroked'
  | 'fab'
  | 'mini-fab'
  | 'extended-fab';

export class ButtonModel {
  /**
   * Creates an instance of ButtonModel.
   *
   * @param label - The label text displayed on the button. Defaults to 'Button'.
   * @param variant - The variant of the button. Defaults to 'basic'.
   * @param disabled - Indicates whether the button is disabled. Defaults to `false`.
   * @param buttonClass - Define the custom class of the button. Defaults to an empty string.
   * @param link - The URL or route the button navigates to. Defaults to an empty string.
   * @param icon - The icon associated with the button. Defaults to an empty string.
   * @param imageIcon - The image icon associated with the button. Defaults to an empty string.
   */
  constructor(
    public label: string = 'Button',
    public variant: ButtonVariant = 'basic',
    public disabled: boolean = false,
    public buttonClass: string = '',
    public link: string = '',
    public icon: string = '',
    public imageIcon: string = '',
  ) {}
}
