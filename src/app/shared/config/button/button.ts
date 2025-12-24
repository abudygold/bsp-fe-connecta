import { ButtonModel, ButtonVariant } from '../../model';

export const CREATE_BUTTON = (
  label: string = 'Basic Button',
  variant: ButtonVariant = 'basic',
  disabled: boolean = false,
  buttonClass: string = '',
  link: string = '',
  icon: string = '',
  imageIcon: string = '',
): ButtonModel => new ButtonModel(label, variant, disabled, buttonClass, link, icon, imageIcon);
