export const waterVertexShader = `
uniform float uTime;
uniform float uWaveHeight;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vUv = uv;
  vec3 pos = position;

  float wave1 = sin(pos.x * 2.8 + uTime * 1.1) * uWaveHeight;
  float wave2 = cos(pos.y * 3.2 + uTime * 0.8) * uWaveHeight * 0.7;
  float wave3 = sin((pos.x + pos.y) * 2.0 + uTime * 1.4) * uWaveHeight * 0.5;
  float wave4 = cos(pos.x * 4.0 - pos.y * 3.0 + uTime * 2.0) * uWaveHeight * 0.3;
  pos.z += wave1 + wave2 + wave3 + wave4;

  vec3 perturbedNormal = normal;
  float dx = sin(pos.x * 2.8 + uTime * 1.1) * uWaveHeight * 2.8
           + sin((pos.x + pos.y) * 2.0 + uTime * 1.4) * uWaveHeight * 2.0;
  float dy = cos(pos.y * 3.2 + uTime * 0.8) * uWaveHeight * 3.2
           + cos(pos.x * 4.0 - pos.y * 3.0 + uTime * 2.0) * uWaveHeight * 3.0;
  perturbedNormal = normalize(vec3(-dx, -dy, 1.0));

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  vViewPosition = -mvPosition.xyz;
  vNormal = normalize(normalMatrix * perturbedNormal);
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const waterFragmentShader = `
uniform float uTime;
uniform float uScrollProgress;
uniform vec3 uColorAbove;
uniform vec3 uColorBelow;
uniform vec3 uGlowColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec3 viewDir = normalize(vViewPosition);
  float NdotV = max(0.0, dot(normalize(vNormal), viewDir));
  float fresnel = 1.0 - NdotV;
  fresnel = pow(fresnel, 3.0);

  vec3 aboveColor = uColorAbove;
  vec3 belowColor = uColorBelow;
  vec3 color = mix(aboveColor, belowColor, smoothstep(0.0, 1.0, uScrollProgress));

  vec3 glowCol = mix(
    vec3(0.3, 0.7, 1.0),
    vec3(0.05, 0.1, 0.3),
    smoothstep(0.0, 1.0, uScrollProgress)
  );
  color += fresnel * glowCol * 0.5;

  float shimmer = sin(vUv.x * 25.0 + vUv.y * 18.0 + uTime * 1.6) * 0.08;
  color += shimmer * mix(vec3(0.2, 0.5, 0.7), vec3(0.0, 0.05, 0.15), smoothstep(0.0, 1.0, uScrollProgress));

  float alpha = 0.45 + fresnel * 0.35;
  alpha = mix(alpha, alpha * 0.7, smoothstep(0.0, 1.0, uScrollProgress));

  float edgeFade = 1.0 - smoothstep(0.0, 0.4, length(vUv - 0.5) - 0.3);
  alpha *= edgeFade;

  gl_FragColor = vec4(color, alpha);
}
`;
