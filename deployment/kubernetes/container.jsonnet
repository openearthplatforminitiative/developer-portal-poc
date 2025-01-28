{
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'developer-portal',
    namespace: 'developer-portal',
  },
  spec: {
    replicas: 1,
    selector: {
      matchLabels: {
        app: 'developer-portal',
      },
    },
    template: {
      metadata: {
        labels: {
          app: 'developer-portal',
        },
      },
      spec: {
        containers: [{
          name: 'developer-portal',
          image: 'ghcr.io/openearthplatforminitiative/developer-portal:latest',
          ports: [{
            containerPort: 3000,
          }],
          env: [
            {
              name: 'NODE_ENV',
              value: 'production',
            },
            {
              name: 'API_DOMAIN',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'api_domain'
                }
              }
            },
            {
              name: 'AUTH_CLIENT_ID',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'auth_client_id'
                }
              }
            },
            {
              name: 'AUTH_CLIENT_SECRET',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'auth_client_secret'
                }
              }
            },
            {
              name: 'AUTH_CLIENT_ISSUER',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'auth_client_issuer'
                }
              }
            },
            {
              name: 'NEXTAUTH_URL',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'nextauth_url'
                }
              }
            },
            {
              name: 'NEXTAUTH_SECRET',
              valueFrom: {
                configMapKeyRef: {
                  name: 'dev-portal-config',
                  key: 'nextauth_secret'
                }
              }
            }
          ],
        }],
      },
    },
  },
}