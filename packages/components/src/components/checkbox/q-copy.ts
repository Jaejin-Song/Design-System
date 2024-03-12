import { defineComponent, h, computed, toRaw, PropType } from 'vue';

export function useFormInject(formAttrs = {}) {
  return (child, action: string, className?: string) => {
    child[action](
      h('input', {
        class: 'hidden' + (className || ''),
        ...formAttrs.value,
      }),
    );
  };
}

const bgNode = h(
  'div',
  {
    key: 'svg',
    class: 'q-checkbox__bg',
  },
  [
    h(
      'svg',
      {
        class: 'q-checkbox__svg fit absolute-full',
        viewBox: '0 0 24 24',
      },
      [
        h('path', {
          class: 'q-checkbox__truthy',
          fill: 'none',
          d: 'M4 12.6111L8.92308 17.5L20 6.5',
        }),

        h('path', {
          class: 'q-checkbox__indet',
          d: 'M4,14H20V10H4',
        }),
      ],
    ),
  ],
);

const props = () => ({
  modelValue: {
    validator: () => true,
    required: true,
  } as unknown as {
    type: PropType<any>;
    required: true;
  },
  trueValue: {
    default: true as const,
  } as {
    type: PropType<any>;
    default: true;
  },
  falseValue: {
    default: false as const,
  } as {
    type: PropType<any>;
    default: false;
  },
  indeterminateValue: {
    default: null,
  } as {
    type: PropType<any>;
    default: null;
  },

  label: String,

  disable: Boolean,
});

export default defineComponent({
  name: 'QCheckbox',
  props: props(),
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const getInner = () => {
      return () => [bgNode];
    };

    const modelIsArray = computed(() => Array.isArray(props.modelValue));

    const isTrue = computed(() =>
      modelIsArray.value === true
        ? false
        : toRaw(props.modelValue) === toRaw(props.trueValue),
    );

    const isFalse = computed(() =>
      modelIsArray.value === true
        ? false
        : toRaw(props.modelValue) === toRaw(props.falseValue),
    );

    const isIndeterminate = computed(
      () => isTrue.value === false && isFalse.value === false,
    );

    const getInnerContent = getInner();

    const classes = computed(() => {
      return `q-checkbox`;
    });

    const innerClass = computed(() => {
      const state =
        isTrue.value === true
          ? 'truthy'
          : isFalse.value === true
            ? 'falsy'
            : 'indet';

      return `q-checkbox__inner q-checkbox__inner--${state}`;
    });

    const formAttrs = computed(() => {
      const prop = { type: 'checkbox' };

      return prop;
    });

    const injectFormInput = useFormInject(formAttrs);

    const onClick = (e: Event) => {
      if (e !== void 0) {
        e.stopPropagation();
      }

      if (props.disable !== true) {
        emit('update:modelValue', getNextValue(), e);
      }
    };

    const getNextValue = () => {
      if (isTrue.value === true) {
        return props.falseValue;
      } else if (isFalse.value === true) {
        return props.trueValue;
      }

      return props.indeterminateValue;
    };

    return () => {
      const inner = getInnerContent();

      injectFormInput(inner, 'unshift', ` q-checkbox__native`);

      const child = [
        h(
          'div',
          {
            class: innerClass.value,
            'aria-hidden': 'true',
          },
          inner,
        ),
      ];

      //   child.push(h('div', {}, 'label'));

      return h(
        'div',
        {
          class: classes.value,
          onClick,
        },
        child,
      );
    };
  },
});
