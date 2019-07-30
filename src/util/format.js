import numeral from 'numeral';
import 'numeral/locales/pt-br';

export function formatPrice(price) {
  return `R$${numeral(price).format('0,0.00')}`;
}
