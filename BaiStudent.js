import Student from './Student';

export default class BaiStudent extends Student {
  constructor(props) {
    super('bai', 'man', '18');
  }

  getDescription() {
    return '哈哈，' + super.getDescription();
  }
}