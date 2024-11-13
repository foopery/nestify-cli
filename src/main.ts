#!/usr/bin/env node
import 'reflect-metadata';
import { Container } from 'typedi';
import { Controller } from './controller';

export const [action, name, ...options] = process.argv.slice(2);
function main() {
  try {
    const controller = Container.get(Controller);
    controller[action as keyof Controller]();
  } catch (e) {
    console.log('존재하지 않는 명령어입니다.');
  }
}

main();
