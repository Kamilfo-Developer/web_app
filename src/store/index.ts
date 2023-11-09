import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

import Password from '@/utils/password'

import {
  User,
  Line,
  Rectangle,
  Ellipse,
  Circle,
  Arrow,
  Text,
} from '@/store/public_interfaces'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null as User | null,
      newUser: null as User | null,
    }
  }
})

export const useFormStateStore = defineStore('form-state', {
  state: () => {
    return {
      isInteracted: false as boolean,
      emailIsGiven: false as boolean,
      emailIsValid: false as boolean,
      passwordIsGiven: false as boolean,
      passwordIsRepeated: false as boolean,
    }
  }
})

export const useAuthorizationStore = defineStore('authorization', {
  state: () => {
    return {
      password: null as Password | null,
      passwordRepeat: null as Password | null,
    }
  },
})

enum shapes {
  Rectangle = 'Rectangle',
  Ellipse = 'Ellipse',
  Arrow = 'Arrow',
};

export const Shapes: Readonly<typeof shapes> = Object.freeze(shapes);

import { ref, Ref } from 'vue';
import Konva from 'konva';

export const useCanvasStore = defineStore('canvas', {
  state: () => {
    return {
      lines: [] as Line[],
      currentLine: {
        id: '1',
        points: [],
        color: 'black',
        width: 0,
      } as Line,
      rectangles: [] as Rectangle[],
      ellipses: [] as Ellipse[],
      arrows: [] as Arrow[],
      texts: [] as Text[],
      currentText: {
        x: 0,
        y: 0,
        text: '',
      } as Text,
      currentShape: {} as Rectangle | Ellipse | Arrow,
      currentId: 1 as number,
      transformer: ref(null) as Ref<null | Konva.Transformer>,
    }
  },
})

export const useCanvasStateStore = defineStore('canvas-state', {
  state: () => {
    return {
      isDrawing: false as boolean,
      isErasing: false as boolean,
      isTexting: false as boolean,
      selectedShape: Shapes.Rectangle as shapes,
      pointer: {
        x: 0,
        y: 0,
        radius: 0,
        fill: 'grey',
        stroke: 'grey',
      } as Circle,
      shapeIdToTransform: null as string | null,
    }
  },
})
