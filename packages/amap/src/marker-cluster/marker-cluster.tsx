import React, { forwardRef, useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { converterMap, setterMap, allProps } from './config';
import { renderMarkerComponent, renderClusterMarkerComponent } from './utils';
import type { MarkerClusterProps } from './types';

export type RefInternalCluster = <RecordType = any>(
  props: MarkerClusterProps<RecordType> & {
    ref?: React.Ref<AMap.MarkerCluster>;
  },
) => React.ReactElement;


const InternalCluster = <RecordType = any>(
  props: MarkerClusterProps<RecordType> = {},
  ref: React.ForwardedRef<AMap.MarkerCluster>
) => {
  const { map, AMap} = useMap();
  const cluster = useRef<AMap.MarkerCluster>(null);

  const { loaded, onInstanceCreated } = usePropsReactive(
    props,
    cluster,
    {
      setterMap,
      converterMap
    }
  );

  useImperativeHandle(
    ref,
    () => cluster.current,
    [loaded]
  );

  useEffect(
    () => {
      if (map) {
        createInstance().then(() => {
          onInstanceCreated?.(cluster.current);

          /** 扩展 zoomOnClick 属性 */
          cluster.current.on('click', (event) => {
            if (!props.zoomOnClick) return;
            if (
              Array.isArray(event.clusterData) &&
              event.clusterData.length > 1
            ) {
              map.setCenter(event.lnglat);
              map.zoomIn();
            }
          })
        });
      }
    },
    [map]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.MarkerCluster'], () => {
        const opts = buildCreateOptions();
        cluster.current = new AMap.MarkerCluster(map, [], opts);
        resolve();
      });
    });
  }

  const buildCreateOptions = () => {
    const options: AMap.MarkerCluster.Options = {};

    const getSetterValue = (key: string, props: MarkerClusterProps) => {
      if (key in converterMap) {
        return converterMap[key](props[key])
      }
      return props[key];
    }

    allProps.forEach((key) => {
      if (key in props) {
        options[key] = getSetterValue(key, props)
      }
    });

    if (props.render) {
      options.renderMarker = (data) => {
        renderMarkerComponent(props.render, data, props.offset);
      }
    }

    if (props.renderCluster) {
      options.renderClusterMarker = (data) => {
        renderClusterMarkerComponent(props.renderCluster, data, props.clusterOffset || props.offset);
      }
    }

    return options;
  }

  return null;
};

const MarkerCluster = forwardRef(InternalCluster) as RefInternalCluster & {
  defaultProps?: Partial<MarkerClusterProps> | undefined;
};

MarkerCluster.defaultProps = {
  zoomOnClick: true
}

export default MarkerCluster;
