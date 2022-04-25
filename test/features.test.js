'use strict';

// Features tests
// usage: deno test  // from parent project's root dir

import {assertEquals} from "https://deno.land/std@0.126.0/testing/asserts.ts";
import {Features} from '../js/features.js';

Deno.test("On create, no features", () => {
  const features = new Features();
  assertEquals(features.size(), 0);
});

Deno.test("On create with one feature size one", () => {
  const featureJson = {"feature1":false};
  const features = new Features(featureJson);
  assertEquals(features.size(), 1);
});

Deno.test("On create with 3 features size 3", () => {
  const featureJson = {"feature1":false, "feature2":false, "feature3":false};
  const features = new Features(featureJson);
  assertEquals(features.size(), 3);
});

Deno.test("Feature not active if false", () => {
  const featureJson = {"feature1":false, "feature2":false, "feature3":false};
  const features = new Features(featureJson);
  assertEquals(features.active("feature1"), false);
});

Deno.test("Mix of Features active and not", () => {
  const featureJson = { "feature1":false, "feature2":true, 
                        "feature3":false, "feature4":true};
  const features = new Features(featureJson);
  assertEquals(features.active("feature1"), false);
  assertEquals(features.active("feature2"), true);
  assertEquals(features.active("feature3"), false);
  assertEquals(features.active("feature4"), true);
});