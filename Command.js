const { log } = console;

// передаём разные комманды (классы) создания точек в класс,
// который выполняет создание и получение координат точек в виде массива

class Command {
  constructor(reciver) {
    this.reciver = reciver;
  }
}

class PointXY extends Command{
  create (x, y) {
    this.x = x;
    this.y = y;
  }

  getPoint() {
    return this.reciver.getPointXY(this);
  }

}

class PointXYZ extends Command{
  create(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getPoint() {
    return this.reciver.getPointXYZ(this);
  }
}

class Reciver {
  getPointXY(point) {
    return [point.x, point.y];
  }

  getPointXYZ(point) {
    return [point.x, point.y, point.z];
  }
}

class Invoker {
  takeCommand(command) {
    this.command = command;
  }

  execute() {
    return this.command.getPoint();
  }
}

const reciver = new Reciver();

const pointXY = new PointXY(reciver);
pointXY.create(1, 2);

const pointXYZ = new PointXYZ(reciver);
pointXYZ.create(3, 4, 5);

const invoker = new Invoker();

invoker.takeCommand(pointXY);
log(invoker.execute());

invoker.takeCommand(pointXYZ);
log(invoker.execute());