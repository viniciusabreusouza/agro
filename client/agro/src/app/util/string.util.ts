export class StringUtil {
  static maskCpfCpnj(num: string) {
    if (num) {
      num = num.replace(/\D/g, '');

      if (num.length > 14) {
        num = num.substring(0, 14);
      }

      switch (num.length) {
        case 4:
          num = num.replace(/(\d{3})(\d+)/, '$1.$2');
          break;
        case 5:
          num = num.replace(/(\d{3})(\d+)/, '$1.$2');
          break;
        case 6:
          num = num.replace(/(\d{3})(\d+)/, '$1.$2');
          break;
        case 7:
          num = num.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
          break;
        case 8:
          num = num.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
          break;
        case 9:
          num = num.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
          break;
        case 10:
          num = num.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
          break;
        case 11:
          num = num.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
          break;
        case 12:
          num = num.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4');
          break;
        case 13:
        case 14:
          num = num.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/,
            '$1.$2.$3/$4-$5'
          );
          break;
        default:
          return num;
      }
    }
    return num;
  }

  static unmaskCpfCnpj(cpfCnpj: string) {
    return cpfCnpj
      .replace(/\./g, '')
      .replace(/-/g, '')
      .replace(/\//g, '');
  }

  static maskOnlyNumbers(num: string) {
    if (num) {
      return num.replace(/\D/g, '');
    }
    return num;
  }

  static maskCurrency(num: string) {
    if (num) {
      if (num.indexOf(',') === -1) {
        const formatDecimal = num.split('.');
        if (formatDecimal.length === 1) {
          num = '00' + num;
        } else if (formatDecimal.length > 1 && formatDecimal[1].length === 1) {
          num = '0' + num;
        }
      }

      num = num.replace(/\D/g, '');
      if (num.substr(0, 2) === '00') {
        num = num.substr(2, num.length - 1);
      } else if (num.substr(0, 1) === '0') {
        num = num.substr(1, num.length - 1);
      }
      if (num.length > 0) {
        if (num.length > 17) {
          num = num.substring(0, 17);
        }

        switch (num.length) {
          case 1:
            num = num.replace(/(\d{1})/, 'R$ 0,0$1');
            break;
          case 2:
            num = num.replace(/(\d{2})/, 'R$ 0,$1');
            break;
          case 3:
            num = num.replace(/(\d+)(\d{2})/, 'R$ $1,$2');
            break;
          case 4:
            num = num.replace(/(\d+)(\d{2})/, 'R$ $1,$2');
            break;
          case 5:
            num = num.replace(/(\d+)(\d{2})/, 'R$ $1,$2');
            break;
          case 6:
            num = num.replace(/(\d+)(\d{3})(\d{2})/, 'R$ $1.$2,$3');
            break;
          case 7:
            num = num.replace(/(\d+)(\d{3})(\d{2})/, 'R$ $1.$2,$3');
            break;
          case 8:
            num = num.replace(/(\d+)(\d{3})(\d{2})/, 'R$ $1.$2,$3');
            break;
          case 9:
            num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, 'R$ $1.$2.$3,$4');
            break;
          case 10:
            num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, 'R$ $1.$2.$3,$4');
            break;
          case 11:
            num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, 'R$ $1.$2.$3,$4');
            break;
          case 12:
          case 13:
          case 14:
            num = num.replace(
              /(\d+)(\d{3})(\d{3})(\d{3})(\d{2})/,
              'R$ $1.$2.$3.$4,$5'
            );
            break;
          case 15:
          case 16:
          case 17:
            num = num.replace(
              /(\d+)(\d{3})(\d{3})(\d{3})(\d{3})(\d{2})/,
              'R$ $1.$2.$3.$4.$5,$6'
            );
            break;
        }
      }
    }
    return num;
  }

  static unmaskCurrency(num: string) {
    if (num) {
      const numArray = num.split(',');
      num = numArray[0].replace(/\D/g, '') + '.' + numArray[1];
    }
    return num;
  }

  static maskHour(hour: string) {
    if (hour) {
      hour = hour.replace(/\D/g, '');
      if (hour.length > 0) {
        if (hour.length > 6) {
          hour = hour.substring(0, 6);
        }

        switch (hour.length) {
          case 3:
            hour = hour.replace(/(\d{2})(\d+)/, '$1:$2');
            break;
          case 4:
            hour = hour.replace(/(\d{2})(\d+)/, '$1:$2');
            break;
          case 5:
            hour = hour.replace(/(\d{2})(\d{2})(\d+)/, '$1:$2:$3');
            break;
          case 6:
            hour = hour.replace(/(\d{2})(\d{2})(\d+)/, '$1:$2:$3');
            break;
          default:
            return hour;
        }
      }
    }
    return hour;
  }

  static maskZipCode(value: string) {
    if (value) {
      value = value.replace(/\D/g, '');

      if (value.length > 8) {
        value = value.substring(0, 8);
      }

      switch (value.length) {
        case 3:
          value = value.replace(/(\d{2})(\d+)/, '$1.$2');
          break;
        case 4:
          value = value.replace(/(\d{2})(\d+)/, '$1.$2');
          break;
        case 5:
          value = value.replace(/(\d{2})(\d+)/, '$1.$2');
          break;
        case 6:
          value = value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2-$3');
          break;
        case 7:
          value = value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2-$3');
          break;
        case 8:
          value = value.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2-$3');
          break;
      }
    }
    return value;
  }

  static unMaskZipCode(value: string) {
    if (value) {
      return value.replace(/\D/g, '');
    } else {
      return '';
    }
  }

  static FormatDecimal(value: string, quantity: number) {
    if (value) {
      const result = value.split('.');
      if (result[1]) {
        while (result[1].length < quantity) {
          result[1] += '0';
        }
        return result[0] + ',' + result[1];
      } else {
        result[0] += ',';
        for (let i = 0; i < quantity; i++) {
          result[0] += '0';
        }
        return result[0];
      }
    }
    return value;
  }

  static maskTelefone(value: string) {
    if (value) {
      value = value.replace(/\D/g, '');

      if (value.length > 11) {
        value = value.substring(0, 11);
      }

      switch (value.length) {
        case 3:
        case 4:
        case 5:
        case 6:
          value = value.replace(/(\d{2})(\d+)/, '($1) $2');
          break;
        case 7:
        case 8:
        case 9:
        case 10:
          value = value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3');
          break;
        case 11:
        value = value.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3');
          break;
        default:
          return value;
      }
    }
    return value;
  }

  static unmaskTelefone(value: string) {
    if (value) {
      return value.replace(/\D/g, '');
    }

    return value;
  }

  static maskOnlyCpf(num: string) {
    if (num) {
      num = num.replace(/\D/g, '');

      if (num.length > 11) {
        num = num.substring(0, 11);
      }

      switch (num.length) {
        case 4:
          num = num.replace(/(\d{3})(\d+)/, '$1.$2');
          break;
        case 5:
          num = num.replace(/(\d{3})(\d+)/, '$1.$2');
          break;
        case 6:
          num = num.replace(/(\d{3})(\d+)/, '$1.$2');
          break;
        case 7:
          num = num.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
          break;
        case 8:
          num = num.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
          break;
        case 9:
          num = num.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
          break;
        case 10:
          num = num.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
          break;
        case 11:
          num = num.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
          break;
        default:
          return num;
      }
    }
    return num;
  }
}
